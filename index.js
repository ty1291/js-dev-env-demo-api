var express =  require('express');
var cors = require('cors');

const app = express();
app.use(cors()); // cross origin requests; ensure we can call Heroku-based API from our UI
                 // hosted on different URL; CORS must be enabled to make Ajax calls to different domain

app.set('port', (process.env.PORT || 5000));

app.get('/', function(request, response) {
  response.send('Hello World!')
});

app.get('/users', function(req, res) {
  // Hard coding for simplicity. Pretend this hits a real database
  res.json([
    {"id": 1,"firstName":"Bob","lastName":"Smith","email":"bob@gmail.com"},
    {"id": 2,"firstName":"Tammy","lastName":"Norton","email":"tnorton@yahoo.com"},
    {"id": 3,"firstName":"Tina","lastName":"Lee","email":"lee.tina@hotmail.com"}
  ]);
});

app.listen(app.get('port'), function() {
  console.log("Node app is running at localhost:" + app.get('port')); 
});