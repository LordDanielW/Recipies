// Anonymous function
// Establish functionality on window load:
// Completes all processes mentioned above
window.onload = init; 

	var size, stringTitle, stringSearch;
	var quickSearch = new Array;
	var searchText, searchButt;
	var outString = "";
	var recipeJson;

// init
//
//
function init() {
    'use strict';
	
	if (!navigator.cookieEnabled) {document.write("Please enable cookies for this site to function properly");}

	getTitles();
	NavBar();
	
	searchText = document.getElementById('tags');
	searchText.onkeyup = searchBar;
	
	searchButt = document.getElementById('Search');
	searchButt.onclick = searchGo;
	
	console.log('finish init');
} // end onload

//	getTitles
//	Gets the titles of all recipe files
//	
function getTitles(){
	
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
			quickSearch.push(stringTitle); //Indexes titles for JQuery			
			outString += '<br>';
		}
		
		//$("#titles1").append(outString);
		document.getElementById("titles1").innerHTML = outString;
	});	
	
} // End getTitles

//	searchBar
//
//
function searchBar(){
	stringSearch = document.getElementById("tags").value;
	if(stringSearch != ""){
		document.getElementById("titles1").innerHTML = "  ";	
	}else{
		getTitles();
	}
}

//	searchGo
//	
//
function searchGo() {
	
	console.log('searchGo');
	stringSearch = document.getElementById("tags").value;
	if(stringSearch != ""){
		var hasTag = match();
		if(hasTag){
			var myWindow = window.open("recipes.html");
		} else
		{
			alert("please enter a valid recipe name");
		}	
	}else{
		alert("no recipe name entered, please enter a recipe name");
	}	

	
	
}

//	match
//
//
function match() {
	
	console.log('tried to match');

	stringSearch = document.getElementById("tags").value;
	
	for (i = 0; i < size; i++) {
		if (quickSearch[i] == stringSearch) {
			localStorage.setItem('recipeTitle', recipeJson.recipes[i].title);
			localStorage.setItem('recipeAuthor', recipeJson.recipes[i].author);
			localStorage.setItem('recipeIngredients', recipeJson.recipes[i].ingredients);
			localStorage.setItem('recipeDirections', recipeJson.recipes[i].directions);
			return true;
		}
	}
	return false;
} // end match


//	jquery Nav Bar
//
//
 function NavBar() {
	$( "#tags" ).autocomplete({
		appendTo: "#titles2",
		source: quickSearch,
		scroll: true			
	}).focus(function() {
            $(this).autocomplete("search", "");
        });
} // End jquery nav bar
