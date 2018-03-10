const axios = require('axios');
const instagram_host = 'https://www.instagram.com/';

/**
 * 
 * @param {String} social_handle_name 
 */
const getUserFeed = async (social_handle_name) => {
    let url = `${instagram_host}${social_handle_name}/?__a=1`;
    let json = await axios.get(url);
    return json;
};

/**
 * 
 * @param {JSON} response from instagram feed
 * 
 * @default: To extract the photos feed alone.
 */
const getInstagramPhotosFeed = async (response) => {
    let photos_feed = response.data.user.media.nodes;
    return photos_feed;
}

/**
 * 
 * @param {Object} req 
 * @param {Object} res 
 */
exports.getInstagramFeed = async (req, res) => {
    let social_handle_name = 'sesankar11';
    let response = await getUserFeed(social_handle_name);
    let instagram_media = await getInstagramPhotosFeed(response);
    res.send(instagram_media);
};