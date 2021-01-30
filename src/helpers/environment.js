let API_URL = '';

switch (window.location.hostname) {
    case 'localhost':
    case '127.0.0.1':
        API_URL = 'https://restaurant-server-11-50-v2.herokuapp.com';
        break;
    case 'restaurant-front-end.herokuapp.com':
        API_URL = 'https://restaurant-server-11-50-v2.herokuapp.com';
        break;

    default:
    //no default 
}

// console.log('current api url is', API_URL);

export default API_URL;