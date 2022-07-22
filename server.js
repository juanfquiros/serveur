const express = require('express');
const app = express();
const router = express.Router();

// On récupère le tableau qui se trouve dans le fichier article.json,
const articles = require('./data/articles.json');

const SERVER_PORT = 3000;

app.use(router);
app.use(express.static('static'));

// On précise à express d'utiliser 'ejs'
app.set('view engine', 'ejs');
// Et On précise que les fichiers .ejs se trouvent dans le dossier views
app.set('views', 'views');

// Route index
router.get('/', (req, res) => {
    res.render('index', { articles });
});

// On dit à express de gérer les routes au format /article/<quelquechose>
// express recupèrera ce qui se trouve à la place de ":articleId" et le mettra dans req.params.articleId
router.get('/article/:articleId', (req, res) => {
    // On récupère l'id d'article qui se trouve dans l'url et on le transforme en string
    const requestedArticleId = parseInt(req.params.articleId);

    // On utilise la fonction find pour récupérer dans notre tableau l'article qui a l'id correspondant
    // à celui donné dans l'url
    const requestedArticle = articles.find(
        article => article.id === requestedArticleId
    );

    // On doit render notre vue, en lui passant l'article qu'on a trouvé
    res.render('article', { article: requestedArticle });
});

// On lance express sur le port 3000
app.listen(SERVER_PORT, () => {
    console.log(`Serveur lancé sur le port ${SERVER_PORT} !`);
});
