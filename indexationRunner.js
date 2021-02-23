const mongoClient = require('./mongodbClient');
const mysqlClient = require('./mysqlClient');

function run(dataToIndexQuery, destinationCollectionName) {
    
    let callback = function (result) {
        mongoClient.insertMany(destinationCollectionName, result);
    }

    mysqlClient.query(dataToIndexQuery, callback);
}

module.exports = {
    run: run
}