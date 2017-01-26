//
//
//

//  Variabes
var recipeJson;
var newRecipeJson = { "title":"blank", "author":"blank", "ingredients":"blank", "directions":"blank"};
var addButt;
var size;

//*************************************************


//************************************************

//  init
//
//
function init(){
    'use strict';

    addButt = document.getElementById('addRecipe');
    addButt.onclick = addTheRecipe;
    getTitles();
    console.log("init complete");
} // end init

//  addTheRecipe
//    ********************* ADD SAFETEYS **************************************
//
function addTheRecipe() {

    newRecipeJson.title = document.getElementById("recipeTitle").value; 
    newRecipeJson.author = document.getElementById("recipeAuthor").value; 
    newRecipeJson.ingredients = document.getElementById("recipeIngredients").value; 
    newRecipeJson.directions = document.getElementById("recipeDirections").value;
    recipeJson.recipes.push(newRecipeJson);
    console.log("recipeJson created");
    setRecipes();
    
    return false;
} // end addTheRecipe

//  setRecipes
//  sets the recipe file
//  
function setRecipes(){
  tempOnEvent = {};
  tempOnEvent.done = [];
  tempOnEvent.fail = [];
  tempOnEvent.always = [];
  tempRequest = {};
  tempRequest.type = 'POST';
  tempRequest.url = 'http://127.0.0.1:3000/api/recipe';
  tempRequest.contentType = 'application/json; charset=utf-8';
  tempRequest.dataType = 'json';
  console.log(JSON.stringify({ 'recipes' : newRecipeJson}));
  tempRequest.data = JSON.stringify({ 'recipes' : newRecipeJson});
  //tempRequest.data = "foo";
  _ajaxReq(tempRequest, tempOnEvent);
  
    
} // End setRecipes



window.onload = init; //put init at bottom