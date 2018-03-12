const express = require('express');
const router = express.Router();

const instagramController = require('../controllers/instagram');
const facebookController = require('../controllers/facebook');

router.get('/', (req, res) => {
    res.send("Hello World");
});

router.get('/get-instagram-data', instagramController.getInstagramFeed);

//Facebook Router
router.get('/get-facebook-data', facebookController.getFacebookFeed);

module.exports = router;

