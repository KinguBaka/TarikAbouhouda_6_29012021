const mongoose = require("mongoose");

const usersSchema = mongoose.Schema({ 
    email: { type: String, required: true }, // adresse électronique de l'utilisateur [unique] 
    password: { type: String, required: true } // hachage du mot de passe de l'utilisateur
});

module.exports = mongoose.model("User", usersSchema);