const express = require('express');
const config = require('./config');
const indexationRunner = require('./indexationRunner');
const app = express()

app.get('/indexWords', (req, res) => {
    const wordsToIndexQuery = 'SELECT * FROM mots';
    indexationRunner.run(wordsToIndexQuery, 'words');
    res.send('Words indexation started...');
});

app.get('/indexTranslations', (req, res) => {
    const translationsToIndexQuery = 'SELECT * FROM traductions';
    indexationRunner.run(translationsToIndexQuery, 'translations');
    res.send('Translations indexation started...');
});

app.listen(config.port, () => console.log(`Server running on port ${config.port}!`));