const MongoClient = require('mongodb').MongoClient;
const config = require('./config');

const uri = `mongodb+srv://${config.mongodbConfig.user}:${config.mongodbConfig.password}@${config.mongodbConfig.host}/${config.mongodbConfig.database}?retryWrites=true&w=majority`;

const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

function insertOne(collectionName, document) {
    try {
        client.connect(err => {
            const collection = client.db(config.mongodbConfig.database).collection(collectionName);
            collection.insertOne(document);
        });
    } finally {
        client.close();
    }
}

function insertMany(collectionName, documents) {
    try {
        client.connect(err => {
            const collection = client.db(config.mongodbConfig.database).collection(collectionName);
            collection.insertMany(documents);
        });
    } finally {
        client.close();
    }
}

module.exports = {
    insertOne: insertOne,
    insertMany: insertMany
};