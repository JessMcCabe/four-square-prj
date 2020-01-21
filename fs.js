const axios = require("axios");

const fsConfig = {
    base_url: 'https://api.foursquare.com/v2/venues/explore?',
    client_id: 'GHXPUDA2QY0EK235QZO4IISJBRU5CDBDQVP4K1DSXJIKRDNM',
    client_secret: 'VX43ZWBRCOKZOCRKZ4YQQDPFAF0ZNWFMX4U1JUWQTRPL4TGD'
};

const fsCredentials = '&client_id=' + fsConfig.client_id + '&client_secret=' + fsConfig.client_secret + '&v=20190101';

console.log(fsConfig.base_url + 'near=Waterford,IE' + fsCredentials);

axios.get(fsConfig.base_url + 'near=Waterford,IE' + fsCredentials).then(function(response) {
    var venues = response.data.response.groups[0].items;
    const venueCollection = [];
    for (let i = 0; i < venues.length; i++) {
        const singleVenue = venues[i].venue;
        const venue = {
            name: singleVenue.name,
        };
        venueCollection.push(venue);
    }
    console.log(venueCollection);
});