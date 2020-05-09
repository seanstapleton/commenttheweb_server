const MongoClient = require('mongodb').MongoClient;
const uri = `mongodb+srv://ctw0:${process.env.db_pwd}@cluster0-3xl2d.mongodb.net/test?retryWrites=true&w=majority`;
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

module.exports = client;
