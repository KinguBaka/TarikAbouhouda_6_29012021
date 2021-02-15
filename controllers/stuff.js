
const Sauce = require("../models/Sauce");
const fs = require("fs");

exports.createThing = (req, res, next) => {
    const sauceObject = JSON.parse(req.body.sauce)
    delete sauceObject._id;    
    const sauce = new Sauce({
        ...sauceObject,
        imageUrl : `${req.protocol}://${req.get("host")}/images/${req.file.filename}`
    });
    sauce.save()
        .then(() => res.status(201).json({ message : " Sauce enregistrée !"}))
        .catch(error => res.status(400).json({ error }));
};

exports.modifyThing = (req, res, next) => {
    const sauceObject = req.file ?
    {
        ...JSON.parse(req.body.sauce),
        imageUrl : `${req.protocol}://${req.get("host")}/images/${req.file.filename}`
    } : { ...req.body };
    Sauce.updateOne({ _id: req.params.id }, { ...sauceObject, _id: req.params.id })
        .then(() => res.status(200).json({ message : " Sauce modifiée !"}))
        .catch(error => res.status(400).json({ error }));
};

exports.deleteThing = (req, res, next) => {
    Sauce.findOne({_id : req.params.id })
        .then( sauce => {
            const filename = sauce.imageUrl.split("/images/")[1];
            fs.unlink(`images/${filename}`, () => {
                Sauce.deleteOne({ _id: req.params.id })
                    .then(() => res.status(200).json({ message : " Sauce supprimée !"}))
                    .catch(error => res.status(400).json({ error }));
            })
        })
        .catch(error => res.status(500).json({ error }));
};

exports.getAllThings = (req, res, next) => {
    Sauce.find()
        .then(sauces => res.status(200).json( sauces ))
        .catch(error => res.status(400).json({ error }));
};

exports.getOneThing = (req, res, next) => {
    Sauce.findOne({ _id: req.params.id })
        .then(sauces => res.status(200).json( sauces ))
        .catch(error => res.status(404).json({ error }));
};

exports.likeOrDislike = (req, res, next) => {
    const likeStatus = req.body.like;
    const userId = req.body.userId ;
    Sauce.findOne({_id : req.params.id })
        .then( sauce => {
            if (likeStatus === 1) {
                Sauce.updateOne({ _id: req.params.id }, 
                    {$push: {usersLiked : userId}, $inc: {likes: +1 }})
                .then(() => res.status(200).json( {message: "Vous avez like cette sauce !" }))
                .catch(error => res.status(400).json({ error }));
            }
            if (likeStatus === -1) {
                Sauce.updateOne({ _id: req.params.id },
                    {$push: {usersDisliked : userId}, $inc : {dislikes : +1}})
                .then(() => res.status(200).json( {message: "Vous avez dislike cette sauce !" }))
                .catch(error => res.status(400).json({ error }));
            }
            if (likeStatus === 0) {
                const index = sauce.usersLiked.indexOf(userId);
                if (index > -1) {
                    sauce.usersLiked.slice(ind, 1);
                    Sauce.updateOne({  _id: req.params.id },
                        {$push: { usersLiked: {$each: [ ], $slice: index} }, $inc: { likes: -1 }})
                    .then(() => res.status(200).json({ message: "Like annulé !" }))
                    .catch((error) => res.status(400).json({ error }))
                } else if (index === -1) {
                    const indDisliked = sauce.usersDisliked.indexOf(userId);
                    sauce.usersDisliked.slice(indDisliked, 1);
                    Sauce.updateOne({  _id: req.params.id },
                        {$push: { usersDisliked: {$each: [ ], $slice: indDisliked} }, $inc: { dislikes: -1 }})
                    .then(() => res.status(200).json({ message: "Dislike annulé !" }))
                    .catch((error) => res.status(400).json({ error }))
                }
            }
        })
        .catch(error => res.status(400).json({ error }));
};