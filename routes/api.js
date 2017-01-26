var express = require('express'); 
var router = express.Router();
//var fs = require('fs');

/*/* CRUD */
/* Create */
router.post('/demo', function(req, res, next) {
  res.send('Got Post Request');
});
/* Read */
router.get('/demo', function(req, res, next) {
  res.send('Got Get Request');
});
/* Update */
router.put('/demo', function(req, res, next) {
  res.send('Got Put Request');
});
/* Delete */
router.delete('/demo', function(req, res, next) {
  res.send('Got Delete Request');
});


/* GET MESSAGE FROM DB */
router.get('/recipe', function(req, res, next) {
  var fs = require('fs');
  var sendText = fs.readFileSync('home/../public/json/recipes2.json','utf8')
  res.send(sendText);
 
});

/* POST MESSAGE TO DB SINCE LAST UPDATE */
router.post('/recipe', function(req, res) { //request, response, next
  var recipeJson;
  var newRecipeJson;
  var fs = require('fs');
  //var obj = require('home/../public/json/recipes.json');
  console.log("Recieved POST: "); //req.body.recipes
  console.log(req.body.recipes); //req.body.recipes
  res.send('Got Post Request');

  var text = fs.readFileSync('home/../public/json/recipes2.json','utf8')  
  var ArecipeJson = JSON.parse(text);
  //console.log(ArecipeJson.recipes.title);
  ArecipeJson.recipes.push(req.body.recipes);

  //recipeJson = {"title" :"fdg","author" :"sdvf","ingredients" :"sdf","directions" :"sdf"};
  newRecipeJson = JSON.stringify(ArecipeJson);

  var fs = require('fs');
  fs.writeFile("home/../public/json/test.json", newRecipeJson, 'utf8', function(err) {
    if(err) {
        return console.log(err);
    }

    console.log("The file was saved!");
  });  
});


module.exports = router;
