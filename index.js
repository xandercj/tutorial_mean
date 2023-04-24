import { config } from 'dotenv';
import { MongoClient } from 'mongodb';

import { executeStudentCrudOperations, executeTareasCrudOperations } from './studentsCrud.js';

config();
console.log(process.env.DB_URI);

/*export async function connectToCluster(uri) {
    let mongoClient;
 
    try {
        mongoClient = new MongoClient(uri);
        console.log('Connecting to MongoDB Atlas cluster...');
        await mongoClient.connect();
        console.log('Successfully connected to MongoDB Atlas!');
 
        return mongoClient;
    } catch (error) {
        console.error('Connection to MongoDB Atlas failed!', error);
        process.exit();
    }
 }
*/

await executeStudentCrudOperations();
await executeTareasCrudOperations();