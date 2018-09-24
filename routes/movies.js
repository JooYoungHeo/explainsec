const express = require('express');
const AWS = require('../AWS');

const router = express.Router();
let dynamoClient = new AWS.DynamoDB.DocumentClient();
let params = {TableName: 'Movies'};

router.get('/', (req, res) => {
    findMovies().then(movies => {
        res.json(movies);
    }).catch(err => {
        res.status(500).json({error: err});
    });
});

function findMovies() {
    return new Promise((resolve, reject) => {
        dynamoClient.scan(params, (err, data) => {
            if (err) reject(err);
            else resolve(data.Items);
        });
    });
}

router.post('/', (req, res) => {
    let year = req.body.year || 0;
    let title = req.body.title || '';
    let info = req.body.info || {};
    let movie = {year: year, title: title, info: info};

    createMovies(movie).then(data => {
        res.json(data);
    }).catch(err => {
        res.status(500).json({error: err});
    });
});

function createMovies(movie) {
    return new Promise((resolve, reject) => {
        let movieParams = params;
        movieParams['Item'] = movie;
        dynamoClient.put(params, (err, data) => {
            if (err) reject(err);
            else resolve(data);
        });
    });
}

module.exports = router;