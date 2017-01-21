//
//
//
window.onload = init; 

//	Variabes
var recipeJson;
var newRecipeJson = { "title":"blank", "author":"blank", "ingredients":"blank", "directions":"blank"};
var addButt;
var size;


// 	init
//
//
function init(){
    'use strict';

    addButt = document.getElementById('addRecipe');
	addButt.onclick = addTheRecipe;
	getTitles();
	console.log("init complete");
} // end init

//	addTheRecipe
//    ********************* ADD SAFETEYS **************************************
//
function addTheRecipe() {

	newRecipeJson.title = document.getElementById("recipeTitle").value; 
	newRecipeJson.author = document.getElementById("recipeAuthor").value; 
	newRecipeJson.ingredients = document.getElementById("recipeIngredients").value; 
	newRecipeJson.directions = document.getElementById("recipeDirections").value;
	recipeJson.recipes[size] = newRecipeJson;
	console.log("newrecipeJson created");
	setRecipes();
	
	return false;
} // end addTheRecipe

//	setRecipes
//	sets the recipe file
//	
function setRecipes(){
	
	// overrides MimeType
	// needed while utilizing local files (which only works on firefox)
	//
	$.ajaxSetup({beforeSend: function(xhr){
	  if (xhr.overrideMimeType)
	  {
		xhr.overrideMimeType("application/json");
	  }
	}
	}); // end MimeType
	
	$.ajax({
		url: "json/test.json",
		dataType: 'json',
		type: "POST",
		data: recipeJson,
		contentType: "application/json",
		success: function(){
			alert('success!');
		}
	});
	
} // End setRecipes

//	getTitles
//	Gets the titles of all recipe files
//	
function getTitles(){  //******************************* TO DO Make work when server setup ****************************************************
	
	// overrides MimeType
	// needed while utilizing local files (which only works on firefox)
	//
	$.ajaxSetup({beforeSend: function(xhr){
	  if (xhr.overrideMimeType)
	  {
		xhr.overrideMimeType("application/json");
	  }
	}
	}); // end MimeType
	
	$.getJSON("json/recipes.json", function(data) {
	//var obj = JSON.parse(data); <--don't parse things that are already parsed you big idot
		localStorage.setItem('recipeJson', data);
		recipeJson = data;
		size = Object.keys(data.recipes).length; // how many recipes
		console.log('Recipe Length = ' + size );
		outString = " ";
		for(var i = 0; i < size; i++){
			stringTitle = data.recipes[i].title;
			outString += stringTitle;		
			outString += '<br>';
		}
	});	
} // End getTitles
