const app = require('express')()

app.get('/', (req, res) => {
  res.send("Let’s change from Hello from Appsody Demo! to Hello from Cloud Paks !!! Last Changes!!!!!");
});
 
module.exports.app = app;
