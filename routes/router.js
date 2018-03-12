const express = require('express');
const router = express.Router();

const instagramController = require('../controllers/instagram');
const facebookController = require('../controllers/facebook');
const twitterController = require('../controllers/twitter');

router.get('/', (req, res) => {
    res.send("Hello World");
});

//Instagram Router
router.get('/get-instagram-data', instagramController.getInstagramFeed);

//Facebook Router
router.get('/get-facebook-data', facebookController.getFacebookFeed);

router.get('/get-twitter-data', twitterController.getTwitterFeed);

module.exports = router;

