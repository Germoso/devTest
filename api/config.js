const env = require('dotenv');
env.config();

const vars = {
    port: process.env.PORT,
    connectionString: process.env.CONNECTION_STRING,
    apiUrl: process.env.API_URL,
}

module.exports = vars;