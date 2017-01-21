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
	document.getElementById("ingredients").innerHTML = localStorage.getItem('recipeIngredients');
	document.getElementById("directions").innerHTML = localStorage.getItem('recipeDirections');
	console.log("loadRecipe");
} // end loadRecipe