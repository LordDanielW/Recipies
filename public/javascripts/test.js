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

var fs = require("fs");

var data = fs.readFileSync('input.txt');

console.log(data.toString());
console.log("Program Ended");

//	console.log(addButt.value);
} // end init

//	addTheRecipe
//
//
function addTheRecipe() {
	
//	fs.writeFile('message.txt', 'Hello Node.js', (err) => {
//		if (err) throw err;
		console.log('It\'s saved!');
//	});
} // end addTheRecipe
