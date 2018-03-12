const axios = require('axios');
const twitter = require('twitter');
const client = new twitter({
    consumer_key: process.env.TWITTER_CONSUMER_KEY,
    consumer_secret: process.env.TWITTER_CONSUMER_KEY_SECRET,
    access_token_key: process.env.TWITTER_ACCESS_TOKEN_KEY,
    access_token_secret: process.env.TWITTER_ACCESS_TOKEN_SECRET,
});

exports.getTwitterFeed = async (req, res) => {
    let social_handle_id = 'nodejs';

    client.get('statuses/user_timeline', { screen_name: 'nodejs', count: 20 }, function(error, tweets, response) {
        if (!error) {
          res.json({ tweets: tweets });
        }
        else {
          res.json({ error: error });
        }
      });
};