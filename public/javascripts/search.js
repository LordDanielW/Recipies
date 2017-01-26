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

//  searchBar
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

//  searchGo
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

//  match
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


//  jquery Nav Bar
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
