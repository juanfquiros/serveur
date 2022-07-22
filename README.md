# Serveur

Dans cet exercice l’objectif est de reprendre une mise en place d’un blog et rajouter quelques fonctionnalités pour le rendre fonctionnel.
Plus spécifiquement on va devoir créer : 
-	Un serveur avec Express
-	Un routage statique
-	Un routage paramétré
-	Des vues dynamiques.



## Étape 1

Premierement on doit créer un projet npm et ensuite on va installer express et ejs.
Ensuite on crée un fichier server.js qui servira comme base pour notre projet.


## Étape 2

Création de la page d’accueil sur l’url `/`. 

## Étape 3

Etape 3 
Ici on va devoir générer le code HTML des différents articles avec les données du fichier `articles.json` afin de rendre nos routes dynamiques. Pour cela on suivra les prochaines étapes :
-	Utiliser EJS comme moteur de rendu
-	Créer un dossier views.ejs
-	Créer un fichier index.ejs dans ce nouveau dossier
-	Modifier le code de la route `/`
-	Récupérer les données dans le fichier articles.json et le passer à la vue EJS. 



## Étape 4

Maintenant, on va devoir créer une route paramétrée pour afficher le détail d’un article, pour cela on a besoin de :
-	Créer un nouveau fichier `article.ejs`
-	Créer une nouvelle route “/article/ :articleId “
-	Dans cette route il faudra modifier les liens vers les fichiers CSS et les images.



### Étape 5

Maintenant on va factoriser nos vues. Pour ça on va commencer par répérer le code qui se répète dans index et article. Ensuite on va créer un dossier `partials` à l’intérieur de `views`, où on viendra mettre le code à factoriser. Pour finir on va ajouter les `partials` dans les `views` correspondants. 
