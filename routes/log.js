const express = require("express");
const router = express.Router();

const logCtrl = require("../controllers/log");

// POST Chiffre le mot de passe de l'utilisateur, ajoute l'utilisateur
router.post("/signup", logCtrl.createUser);

// POST Vérifie les informations d'identification de l'utilisateur, en renvoyant l'identifiant
// userID depuis la base de données et un jeton Web JSON signé (contenant également l'identifiant userID)
router.post("/login", logCtrl.logUser);

module.exports = router;