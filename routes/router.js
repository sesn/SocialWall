const express = require('express');
const router = express.Router();

const instagramController = require('../controllers/instagram');

router.get('/', (req, res) => {
    res.send("Hello World");
});

router.get('/get-instagram-data', instagramController.getInstagramFeed);

module.exports = router;

