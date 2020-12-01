/** Connect to MongoDB database **/

// Mock data (`MOCK_DATA.json`) generated using Mockaroo (https://www.mockaroo.com/)

/*
Connect to a MongoDB database using the official MongoDB driver for Node.js :
https://www.npmjs.com/package/mongodb
https://www.mongodb.com/blog/post/quick-start-nodejs-mongodb--how-to-get-connected-to-your-database
https://developer.mongodb.com/quickstart/node-crud-tutorial
*/

const {MongoClient} = require('mongodb');
require('dotenv').config();

async function main() {

    const uri = "mongodb://" + process.env.DB_USER + ":" + process.env.DB_PASS + "@" + process.env.DB_HOST + "/" + process.env.DB_NAME + "?retryWrites=true&w=majority";

    const client = new MongoClient(uri);

    try {
        if (await client.connect()){
            console.log("-> Connected to MongoDB database.")
        }
        await listDatabases(client);
        await findOneDocument(client, process.env.DB_COLLECTION);
        await findAllDocuments(client, process.env.DB_COLLECTION);

    } catch (e) {
        console.error(e.message);
    } finally {
        client.close();
    }

    client.on('close', () => { console.log('-> Connection to MongoDB database closed.'); });
}


main().catch(console.error);


/*** Functions ***/
// List databases
async function listDatabases(client) {
    databasesList = await client.db().admin().listDatabases();

    console.log("********\nDatabases:");
    databasesList.databases.forEach(db => console.log(` - ${db.name}`));
};


// Find first document
async function findOneDocument(client, collectionName) {
    result = await client.db().collection(collectionName)
                        .findOne({});

    if (result) {
        console.log('*************\nFirst document found :',result);
    } else {
        console.log('*************\nNo documents found.');
    }
}


// Find all documents
async function findAllDocuments(client, collectionName) {

    cursor = client.db().collection(collectionName)
        .find({
            first_name: 'Kendell'
            // Also correct:   first_name: { $eq: 'Kendell' }
            // Also correct:   'first_name': 'Kendell'
        });

    // Method 1
    results = await cursor.toArray();

    // Method 2
    /*
    results = [];
    await cursor.forEach(function(doc){
        results.push(doc)
    })
    */

    if (result) {
        console.log('*************\nDocuments found:',results);
    } else {
        console.log('*************\nNo documents found.');
    }
}
