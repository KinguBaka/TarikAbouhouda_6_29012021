const express = require("express");
const router = express.Router();

const stuffCtrl = require("../controllers/stuff");
const auth = require("../middleware/auth");


// POST Capture et enregistre l'image, analyse la sauce en utilisant une chaîne de caractères et
// l'enregistre dans la base de données, en définissant correctement son image URL. Remet les
// sauces aimées et celles détestées à 0, et les sauces usersliked et celles usersdisliked aux tableaux vides.
router.post("/", auth, stuffCtrl.createThing);

// Met à jour la sauce avec l'identifiant fourni. Si une image est téléchargée, capturez-la
// et mettez à jour l'image URL des sauces. Si aucun fichier n'est fourni, les détails de la
// sauce figurent directement dans le corps de la demande (req.body.name, req.body.heat etc). Si
// un fichier est fourni, la sauce avec chaîne est en req.body.sauce.
router.put("/:id", auth, stuffCtrl.modifyThing);

// Supprime la sauce avec l'ID fourni
router.delete("/:id", auth, stuffCtrl.deleteThing);

//GET Renvoie le tableau de toutes les sauces dans la base de données
router.get("/", auth, stuffCtrl.getAllThings);

//GET Renvoie la sauce avec l'ID fourni
router.get("/:id", auth, stuffCtrl.getOneThing);
  
module.exports = router;