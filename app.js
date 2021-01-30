const express = require("express");
const bodyParser = require("body-parser");
const app = express();

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
    next();
});

app.use(bodyParser.json());

// POST Chiffre le mot de passe de l'utilisateur, ajoute l'utilisateu
app.post("/api/auth/signup", (req, res, next) => {
    res.status(201).json({
        message : "Objet creer !"
    });
});

// POST Vérifie les informations d'identification de l'utilisateur, en renvoyant l'identifiant
// userID depuis la base de données et un jeton Web JSON signé (contenant également l'identifiant userID)
app.post("/api/auth/login", (req, res, next) => {
    res.status(201).json({
        message : "Objet creer !"
    });
});

// POST Capture et enregistre l'image, analyse la sauce en utilisant une chaîne de caractères et
// l'enregistre dans la base de données, en définissant correctement son image URL. Remet les
// sauces aimées et celles détestées à 0, et les sauces usersliked et celles usersdisliked aux tableaux vides.
app.post("/api/sauces", (req, res, next) => {
    res.status(201).json({
        message : "Objet creer !"
    });
});

//GET Renvoie le tableau de toutes les sauces dans la base de données
app.use("/api/sauces", (req, res, next) => {
    const stuff = [
      {
        _id: 'oeihfzeoi',
        title: 'Mon premier objet',
        description: 'Les infos de mon premier objet',
        imageUrl: 'https://cdn.pixabay.com/photo/2019/06/11/18/56/camera-4267692_1280.jpg',
        price: 4900,
        userId: 'qsomihvqios',
      },
      {
        _id: 'oeihfzeomoihi',
        title: 'Mon deuxième objet',
        description: 'Les infos de mon deuxième objet',
        imageUrl: 'https://cdn.pixabay.com/photo/2019/06/11/18/56/camera-4267692_1280.jpg',
        price: 2900,
        userId: 'qsomihvqios',
      },
    ];
    res.status(200).json(stuff);
});

//GET Renvoie la sauce avec l'ID fourni
app.use("/api/sauce/:id", (req, res, next) => {

});


module.exports = app;