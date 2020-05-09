module.exports = (dbClient) => {
    var express = require('express');
    var router = express.Router();

    /* GET home page. */
    router.get('/', function(req, res, next) {
        res.send({ success: true });
    });

    /* GET comments for a url */
    router.get('/comments', (req, res, next) => {
        const url = req.query.url;
        console.log(process.env.db_pwd);
        
        const collection = dbClient.db("commenttheweb").collection("comments");
        collection.find({ url: url }).toArray((err, comments) => {
            res.send({ success: true, data: comments });
        });
    });
    
    return router;
};
