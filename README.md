Projet 6 de la formation développeur web d'Openclassrooms : Création d'une Api pour un site de recommandation de sauce

Node.js - Mongoose

Front : https://github.com/OpenClassrooms-Student-Center/dwj-projet6
Procédure
1. Cloner le projet
2. Exécuter npm install
3. Exécuter npm start / npm run start
4. Exécution de l’API sur http://localhost:3000 

----------------------------------------------------------------------------------------------

Back :
1. Cloner le projet
2. Exécuter npm install
3. Exécuter nodemon server*

Creer un fichier .env
le remplir de vos différentes variable (ex: DB_USER=UtilisateurDeLaBaseDeDonnée, DB_PASS=MotDePasseDeLutilisateur, USER_TOKEN="VotreToken")

----------------------------------------------------------------------------------------------
Routes :

USER : 

POST -- /api/auth/signup -- Request : { email:string,password:string } -- Answer : { message:string } -- Chiffre le mot de passe de l'utilisateur, ajoute l'utilisateur à la base de données

POST -- /api/auth/login -- Request : { email: string, password: string } -- Answer : { userId: string, token: string } --  Vérifie les informations d'identification de l'utilisateur, en renvoyant l'identifiant userID depuis la base de données et un jeton Web JSON signé (contenant également l'identifiant userID)

SAUCE : 

GET -- /api/sauces -- Answer : Tableaudes sauces -- Renvoie le tableau de toutes les sauces dans la base de données

GET -- /api/sauces/:id -- Answer : Sauce unique -- Renvoie la sauce avec l'ID fourni

POST -- /api/sauces -- Request :  { sauce : Chaîne, image : Fichier } -- Answer : { message : Chaîne } -- Capture et enregistre l'image, analyse la sauce en utilisant une chaîne de caractères et l'enregistre dans la base de données, en définissant correctement son image URL.

PUT -- /api/sauces/:id -- Request : SOIT Sauce comme JSON OU { sauce : Chaîne, image : Fichier } -- Answer : { message : Chaîne } -- Met à jour la sauce avec
l'identifiant fourni. Si une image est btéléchargée, capturez-la et mettez à jour l'image URL des sauces. Si aucun fichier n'est fourni, les détails de la
sauce figurent directement dans le corps de la demande (req.body.name, req.body.heat etc). Si un fichier est fourni, la sauce avec chaîne est en req.body.sauce.

DELETE -- /api/sauces/:id -- Answer :  { message: Chaîne } -- Supprime la sauce avec l'ID fourni.

POST -- /api/sauces/:id/like -- Request : { userId: Chaîne, j'aime : Nombre } -- Answer : { message : Chaîne } --  Définit le statut "j'aime" pour userID fourni. Si j'aime = 1,
l'utilisateur aime la sauce. Si j'aime = 0, l'utilisateur annule ce qu'il aime ou ce qu'il n'aime pas. Si j'aime = -1, l'utilisateur n'aime pas la sauce. L'identifiant de
l'utilisateur doit être ajouté ou supprimé du tableau approprié, en gardant une trace de ses préférences et en l'empêchant d'aimer ou de ne pas aimer la même sauce plusieurs
fois. Nombre total de "j'aime" et de "je n'aime pas" à mettre à jour avec chaque "j'aime".

----------------------------------------------------------------------------------------------------

