const express = require("express");
const router = express.Router();

const userCtrl = require("../controllers/userCtrl");

// POST Chiffre le mot de passe de l'utilisateur, ajoute l'utilisateur
router.post("/signup", userCtrl.signup);

// POST Vérifie les informations d'identification de l'utilisateur, en renvoyant l'identifiant
// userID depuis la base de données et un jeton Web JSON signé (contenant également l'identifiant userID)
router.post("/login", userCtrl.login);

module.exports = router;