var express = require('express');
var Path = require('path');
var routes = express.Router();
 
//Route to index.html
var assetFolder = Path.resolve(__dirname, '../');
  routes.use(express.static(assetFolder));

if (process.env.NODE_ENV !== 'test') {
  routes.get('/*', function(req, res){
    res.sendFile(assetFolder + 'index.html')
  })

var app = express();
  app.use( require('body-parser').json() )
  app.use('/', routes);

module.exports = app;
 
  app.use('/', routes);
  var port = process.env.PORT || 4000;
  app.listen(port);
  console.log("Listening on port", port);

} else {

  module.exports = routes;

};