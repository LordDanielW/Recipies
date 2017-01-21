//
//
//
window.onload = init; 

//	Variabes
var recipeJson;
var newRecipeJson = { "title":"blank", "author":"blank", "ingredients":"blank", "directions":"blank"};
var addButt;


// 	init
//
//
function init(){
    'use strict';

    addButt = document.getElementById('addRecipe');
	addButt.onclick = addTheRecipe;

//	recipeJson = localStorage.getItem('recipeJson');
//	addTheRecipe();

//	console.log(addButt.value);
} // end init

//	addTheRecipe
//
//
function addTheRecipe() {
	
	console.log("addRecipe called");
	newRecipeJson.title = document.getElementById("recipeTitle").value; 
	newRecipeJson.author = document.getElementById("recipeAuthor").value; 
	newRecipeJson.ingredients = document.getElementById("recipeIngredients").value; 
	newRecipeJson.directions = document.getElementById("recipeDirections").value; 
	console.log("newrecipeJson created");
	return false;
} // end addTheRecipe
