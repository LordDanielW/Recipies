// Anonymous function
// Establish functionality on window load:
// Completes all processes mentioned above
window.onload = init; 

//	Variabes
//var recipeJson;


// 	init
//
//
function init() {
    'use strict';

	//recipeJson = localStorage.getItem('recipeJson');
	
	loadRecipe();
	
} // end init

//	loadRecipe
//
//
function loadRecipe() {
	document.getElementById("title").innerHTML = localStorage.getItem('recipeTitle');
	document.getElementById("author").innerHTML = localStorage.getItem('recipeAuthor');

	var ingredients = localStorage.getItem('recipeIngredients');
	var ingredientsCor = ingredients.replace( /\+/g, '<br>+' );
	var directions = localStorage.getItem('recipeDirections');
	var directionsCor = directions.replace( /\+/g, '<br>+' );

	document.getElementById("ingredients").innerHTML = ingredientsCor;
	document.getElementById("directions").innerHTML = directionsCor;
	console.log("loadRecipe");
} // end loadRecipe