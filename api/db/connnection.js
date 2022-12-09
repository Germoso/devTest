const db = require('mongoose');
const { connectionString } = require('../config');
const connection = () => {
    db.connect(connectionString)
        .then(()=> console.log('[db] database connected'))
        .catch((e) => console.error(e));
}
module.exports = connection;