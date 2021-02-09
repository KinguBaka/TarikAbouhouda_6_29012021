const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const path = require("path");
const helmet = require("helmet");
const dotenv = require("dotenv")

dotenv.config();

const stuffRoutes = require("./routes/stuff");
const userRoutes = require("./routes/user");

mongoose.connect(`mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@p6-openclassrooms.vhxyz.mongodb.net/p6-openclassrooms?retryWrites=true&w=majority`,
  { useNewUrlParser: true,
    useUnifiedTopology: true })
  .then(() => console.log('Connexion à MongoDB réussie !'))
  .catch(() => console.log('Connexion à MongoDB échouée !'));

const app = express();
app.use(helmet());

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
    next();
});

app.use(bodyParser.json());

app.use("/images", express.static(path.join(__dirname, "images")));

app.use("/api/sauces", stuffRoutes);
app.use("/api/auth", userRoutes);

module.exports = app;