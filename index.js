const dotenv = require('dotenv');
const server = require('./node_modules/@sap/html5-repo-mock/lib/server');

dotenv.config();
server.start();
