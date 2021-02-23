const express = require('express');
const config = require('./config');
const indexationRunner = require('./indexationRunner');
const app = express()

app.get('/indexWords', (req, res) => {
    const wordsToIndexQuery = 'SELECT * FROM mots limit 5';
    indexationRunner.run(wordsToIndexQuery, 'words');
    res.send('Words indexation started...');
});

app.get('/indexTranslations', (req, res) => {
    const wordsToIndexQuery = 'SELECT * FROM traductions';
    indexationRunner.run(wordsToIndexQuery, 'translations');
    res.send('Traductions indexation started...');
});

app.listen(config.port, () => console.log(`Server running on port ${config.port}!`));