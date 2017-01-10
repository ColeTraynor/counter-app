import express from 'express';
import bodyParser from 'body-parser';
import routes from "./routes";
var app = express();
var cors = require('cors');
require('dotenv').config({silent: true, path: "../shared/process.env"});

app.use(cors());
app.use(bodyParser.json());
app.use(routes());


app.listen(process.env.SERVER_PORT, function() {
  console.log("Server listening on port " + process.env.SERVER_PORT);
});

export default app;
