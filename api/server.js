const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const router = require('./router/article.routes');
const { port } = require('./config');
const dbConnection = require('./db/connnection');

const appPort = port || 3100;

const app = express();

dbConnection();
app.use(bodyParser.json());
app.use(cors())
router(app);

app.listen(appPort, ()=> console.log(`[APP] app running in port ${appPort}`));