var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var cors = require('cors');
require('dotenv').config({silent: true, path: "../shared/process.env"});
console.log(process.env.API_BASE);


var users = {
  Test: {
    count: 22
  },
  Cole: {
    count: 123
  }
}

app.use(cors());

app.get('/', function(req, res) {
  res.send("hello");
})

//send user login page
app.use('/count', bodyParser.json());
app.post('/count', function(req, res) {
  console.log("Count", req.body);
  var user = users[req.body.username];
  if (user) {
    res.send({
      success: true,
      result: user.count
    })
  } else {
    res.send({
      success: false,
      error: "user not found"
    })
  }
});

app.listen(8082, function() {
  console.log("Server listening on port 8082");
});
