var express = require('express');
var router = express.Router();
const MongoClient = require('mongodb').MongoClient;
const uri = `mongodb+srv://ctw0:${process.env.db_pwd}@cluster0-3xl2d.mongodb.net/test?retryWrites=true&w=majority`;
const client = new MongoClient(uri, { useNewUrlParser: true });

/* GET home page. */
router.get('/', function(req, res, next) {
    res.send({ success: true });
});

/* GET comments for a url */
router.get('/comments', (req, res, next) => {
    const url = req.query.url;
    
    client.connect(err => {
        const collection = client.db("commenttheweb").collection("comments");
        collection.find({ url: url }).toArray((err, comments) => {
            res.send({ success: true, data: comments });
        });
        client.close();
    });
});

module.exports = router;
