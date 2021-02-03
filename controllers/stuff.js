
const Sauce = require("../models/Sauce");

exports.createThing = (req, res, next) => {
    const sauce = new Sauce({
        ...req.body
    });
    sauce.save()
        .then(() => res.status(201).json({ message : " Objet enregistré :"}))
        .catch(error => res.status(400).json({ error }));
};

exports.modifyThing = (req, res, next) => {
    Sauce.updateOne({ _id: req.params.id }), { ...req.body, _id: req.params.id }
        .then(() => res.status(200).json({ message : " Objet modifié !"}))
        .catch(error => res.status(400).json({ error }));
};

exports.deleteThing = (req, res, next) => {
    Sauce.deleteOne({ _id: req.params.id })
        .then(() => res.status(200).json({ message : " Objet supprimé !"}))
        .catch(error => res.status(400).json({ error }));
};

exports.getAllThings = (req, res, next) => {
    Sauce.find()
        .then(sauces => res.status(200).json({ message : sauces}))
        .catch(error => res.status(400).json({ error }));
};

exports.getOneThing = (req, res, next) => {
    Sauce.findOne({ _id: req.params.id })
        .then(sauces => res.status(200).json({ sauces }))
        .catch(error => res.status(404).json({ error }));
};