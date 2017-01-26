//
//
//
_ajaxReq = function(argRequest, argOnEvent) {
  var jqxhr;
  jqxhr = $.ajax(argRequest).done((function(_this) {
    return function(resp) {
      var iterFunction, _i, _len, _ref;
      if (!isUnset(argOnEvent) && 'done' in argOnEvent) {
        if (toString.call(argOnEvent.done) === '[object Array]') {
          _ref = argOnEvent.done;
          for (_i = 0, _len = _ref.length; _i < _len; _i++) {
            iterFunction = _ref[_i];
            iterFunction(resp);
          }
        } else if (toString.call(argOnEvent.done) === '[object Function]') {
          argOnEvent.done(resp);
        }
      }
    };
  })(this)).fail((function(_this) {
    return function(jqXHR, textStatus, error) {
      var iterFunction, _i, _len, _ref;
      if (!isUnset(argOnEvent) && 'fail' in argOnEvent) {
        if (toString.call(argOnEvent.fail) === '[object Array]') {
          _ref = argOnEvent.fail;
          for (_i = 0, _len = _ref.length; _i < _len; _i++) {
            iterFunction = _ref[_i];
            iterFunction(jqXHR, textStatus, error);
          }
        } else if (toString.call(argOnEvent.fail) === '[object Function]') {
          argOnEvent.fail(jqXHR, textStatus, error);
        }
      }
    };
  })(this)).always((function(_this) {
    return function(resp) {
      var iterFunction, _i, _len, _ref;
      if (!isUnset(argOnEvent) && 'always' in argOnEvent) {
        if (toString.call(argOnEvent.always) === '[object Array]') {
          _ref = argOnEvent.always;
          for (_i = 0, _len = _ref.length; _i < _len; _i++) {
            iterFunction = _ref[_i];
            iterFunction(resp);
          }
        } else if (toString.call(argOnEvent.always) === '[object Function]') {
          argOnEvent.always(resp);
        }
      }
    };
  })(this));
}; //end _ajaxReq

//
isUnset = function(argValue, argDefault) {
  if (typeof argDefault !== 'undefined' && argDefault !== null) {
    if (typeof argValue !== 'undefined' && argValue !== null) {
      return argValue;
    } else {
      return argDefault;
    }
  } else {
    if (typeof argValue !== 'undefined' && argValue !== null) {
      return false;
    } else {
      return true;
    }
  }
}; // end isUnset

//  getTitles
//  Gets the titles of all recipe files
//  
function getTitles(){
    var onDone, tempOnEvent, tempRequest;
    console.log('refresh started');
    tempOnEvent = {};
    tempOnEvent.done = [];
    tempOnEvent.fail = [];
    tempOnEvent.always = [];
    tempOnEvent.always.push(function(resp) {
      console.log('always');
      console.log(resp);
    });
    onDone = function(resp) {
        //console.log(resp.body);
        
        recipeJson = resp; 
        
        localStorage.setItem('recipeJson', recipeJson);  // Might stringify?
        size = Object.keys(recipeJson.recipes).length; // how many recipes
        console.log('Recipe Length = ' + size );
        outString = " ";
        for(var i = 0; i < size; i++){
            stringTitle = recipeJson.recipes[i].title;
            outString += stringTitle;
            quickSearch.push(stringTitle); //Indexes titles for JQuery          
            outString += '<br>';
        }   
        document.getElementById("titles1").innerHTML = outString; // append, this parses and kills processing 124 client.js
 
   

    };
    tempOnEvent.done = [onDone];
    tempRequest = {};
    tempRequest.type = 'GET';
    tempRequest.url = 'http://127.0.0.1:3000/api/recipe/';
    tempRequest.contentType = 'application/json; charset=utf-8';
    tempRequest.dataType = 'json';
    _ajaxReq(tempRequest, tempOnEvent);
} // end getTitles