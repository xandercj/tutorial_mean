import { MongoClient, ObjectId } from 'mongodb';


export async function connectToCluster(uri) {
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

export async function executeStudentCrudOperations() {
    const uri = process.env.DB_URI;
    let mongoClient;

    try {
        mongoClient = await connectToCluster(uri);
        const db = mongoClient.db('school');
        const collection = db.collection('students');

        console.log('CREATE Student');
        await createStudentDocument(collection);

        console.log(await findStudentsByName(collection, 'John Smith'));

        console.log('UPDATE Student\'s Birthdate');
        await updateStudentsByName(collection, 'John Smith', { birthdate: new Date(2001, 5, 5) });
        console.log(await findStudentsByName(collection, 'John Smith'));

        console.log('DELETE Student');
        await deleteStudentsByName(collection, 'John Smith');
        console.log(await findStudentsByName(collection, 'John Smith'));
    } finally {
        await mongoClient.close();
    }
}

export async function createStudentDocument(collection) {
    const studentDocument = {
        name: 'John Smith',
        birthdate: new Date(2000, 11, 20),
        address: { street: 'Pike Lane', city: 'Los Angeles', state: 'CA' },
    };

    await collection.insertOne(studentDocument);
}

export async function findStudentsByName(collection, name) {
    return collection.find({ name }).toArray();
}

export async function updateStudentsByName(collection, name, updatedFields) {
    await collection.updateMany(
        { name },
        { $set: updatedFields }
    );
}

export async function deleteStudentsByName(collection, name) {
    await collection.deleteMany({ name });
}

export async function executeTareasCrudOperations() {
    const uri = process.env.DB_URI;
    let mongoClient;

    try {
        mongoClient = await connectToCluster(uri);
        const db = mongoClient.db('tareas');
        const collection = db.collection('tareas');

        console.log('CREATE tarea');
        await createTareasDocument(collection);

        console.log(await findTareasByName(collection, 'Tarea1'));

        console.log('UPDATE Tarea\'s date');
        await updateTareasByName(collection, 'Tarea1', { fecha: new Date(2001, 5, 5) });
        console.log(await findTareasByName(collection, 'Tarea1'));

        console.log('DELETE Tarea');
        await deleteTareasByName(collection, 'Tarea1');
        console.log(await findTareasByName(collection, 'Tarea1'));

        console.log('QUERY BY _id');
        console.log(await findTareasById(collection, '64469fc2c0a94acebf80031f'));
        console.log(await findTareasById(collection, '6446a0b0f80095988b3fb4aa'));
        
    } finally {
        await mongoClient.close();
    }
}

export async function createTareasDocument(collection) {
    var tareaDocument = {
        titulo: 'Tarea1',
        fecha: new Date(2000, 11, 20),
        estado: 'Por hacer',
    };

    await collection.insertOne(tareaDocument);

    tareaDocument = {
        titulo: 'Tarea2',
        fecha: new Date(2023, 4, 25),
        estado: 'Por hacer',
    };

    await collection.insertOne(tareaDocument);
}

export async function findTareasByName(collection, titulo) {
    return collection.find({ titulo }).toArray();
}

export async function findTareasById(collection, id) {
    return collection.find({ _id : new ObjectId(id)}).toArray();
}

export async function updateTareasByName(collection, titulo, updatedFields) {
    await collection.updateMany(
        { titulo },
        { $set: updatedFields }
    );
}

export async function deleteTareasByName(collection, titulo) {
    await collection.deleteMany({ titulo });
}