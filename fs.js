const axios = require("axios");

const fsConfig = {
    base_url: 'https://api.foursquare.com/v2/venues/explore?',
    client_id: 'GHXPUDA2QY0EK235QZO4IISJBRU5CDBDQVP4K1DSXJIKRDNM',
    client_secret: 'VX43ZWBRCOKZOCRKZ4YQQDPFAF0ZNWFMX4U1JUWQTRPL4TGD'
};

const fsCredentials = '&client_id=' + fsConfig.client_id + '&client_secret=' + fsConfig.client_secret + '&v=20190101';

console.log(fsConfig.base_url + 'near=Waterford,IE' + fsCredentials);