
import { MongoClient } from'mongodb';

const DATABASE_USER = process.env.DATABASE_USERNAME || 'rafaelsilvapegoretti'
const DATABASE_PASSWORD = process.env.DATABASE_PASSWORD || '3B4faCmoXOZ5YMfa'
const DATABASE_CLUSTER = process.env.DATABASE_CLUSTER || 'cluster0'

export default async function run() {
    const uri = `mongodb://${DATABASE_USER}:${DATABASE_PASSWORD}@ac-f5v0vcl-shard-00-00.0izqusv.mongodb.net:27017,ac-f5v0vcl-shard-00-01.0izqusv.mongodb.net:27017,ac-f5v0vcl-shard-00-02.0izqusv.mongodb.net:27017/?ssl=true&replicaSet=atlas-f8xvfi-shard-0&authSource=admin&retryWrites=true&w=majority&appName=Cluster0`
    const client = new MongoClient(uri);

    try {
        await client.connect();
        await client.db("admin").command({ ping: 1 });
        console.log("Pinged your deployment. You successfully connected to MongoDB!");
    } finally {
        await client.close();
    }
}
