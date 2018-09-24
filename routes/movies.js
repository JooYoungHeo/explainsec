const express = require('express');

const router = express.Router();

router.get('/', (req, res) => {
    res.json({1: true});
});

router.post('/', (req, res) => {
    res.json({1: true});
});

module.exports = router;