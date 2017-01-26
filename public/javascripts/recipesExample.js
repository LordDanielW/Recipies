// Anonymous function
// Establish functionality on window load:
// Completes all processes mentioned above
window.onload = function() {
    'use strict';
	
	// overrides MimeType
	// 
	//
	$.ajaxSetup({beforeSend: function(xhr){
	  if (xhr.overrideMimeType)
	  {
		xhr.overrideMimeType("application/json");
	  }
	}
	}); // end MimeType
	
	$.getJSON("json/recipes.json", function(data) {
	 
		//var obj = JSON.parse(data);
		document.getElementById("demo").innerHTML = data.recipes[1].title;
		console.log('success');
	});
};