const axios = require('axios');

const fb_graph_url_detail = {
    host: "https://graph.facebook.com/",
    field_options : [
        "full_picture",
        "picture",
        "link",
        "created_time",
        "id",
        "message"
    ],
    limit: 50,
    access_token: process.env.FACEBOOK_APP_ACCESS_TOKEN
};


const getUserFeed = async (social_handle_id) => {
    let url = `${fb_graph_url_detail.host}${social_handle_id}/posts?include_hidden=1&fields=${fb_graph_url_detail.field_options.join(',')}&limit=${fb_graph_url_detail.limit}&access_token=${fb_graph_url_detail.access_token}`;
    let json = await axios.get(url);
    return json.data.data;
};


exports.getFacebookFeed = async (req, res) => {
    let social_handle_id = "wkdelhi";
    let response = await getUserFeed(social_handle_id);
    res.send(response);
};