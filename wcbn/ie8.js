if(!Date.now){Date.now = function(){return new Date().valueOf();}}
if (!Object.create) {Object.create = (function(){function F(){}return function(o){if (arguments.length != 1) {throw new Error('Object.create implementation only accepts one parameter.');}F.prototype = o;return new F()}})()}
if ( !Array.prototype.forEach ) {
  Array.prototype.forEach = function forEach( callback, thisArg ) {
    var T, k;
    if ( this == null ) {
      throw new TypeError( "this is null or not defined" );
    }
    var O = Object(this);
    var len = O.length >>> 0; 
    if ( typeof callback !== "function" ) {
      throw new TypeError( callback + " is not a function" );
    }
    if ( arguments.length > 1 ) {
      T = thisArg;
    }
    k = 0;

    while( k < len ) {

      var kValue;
      if ( k in O ) {

        kValue = O[ k ];
        callback.call( T, kValue, k, O );
      }
      k++;
    }
  };
}
if (!Array.isArray) {Array.isArray = function(arg) {return Object.prototype.toString.call(arg) === '[object Array]';};}
if (!Array.prototype.indexOf){
  Array.prototype.indexOf = function(elt /*, from*/)
  {
    var len = this.length >>> 0;
    var from = Number(arguments[1]) || 0;
    from = (from < 0)
         ? Math.ceil(from)
         : Math.floor(from);
    if (from < 0)
      from += len;
    for (; from < len; from++)
    {
      if (from in this &&
          this[from] === elt)
        return from;
    }
    return -1;
  };
}
window.HTMLElement = window.HTMLElement || Element;
function matchesSelector(element,selector){
    if(element.matches){
        return element.matches(selector);
    } else if(element.matchesSelector){
        return element.matchesSelector(selector);
    } else if(element.webkitMatchesSelector){
        return element.webkitMatchesSelector(selector);
    } else if(element.msMatchesSelector){
        return element.msMatchesSelector(selector);
    } else if(element.mozMatchesSelector){
        return element.mozMatchesSelector(selector);
    } else if(element.oMatchesSelector){
        return element.oMatchesSelector(selector);
    } else if(element.querySelectorAll){
        var matches = (element.document || element.ownerDocument).querySelectorAll(selector),
            i = 0;
 
        while(matches[i] && matches[i] !== element) i++;
        return matches[i] ? true: false;
    }
    throw new Error('Your browser version is too old,please upgrade your browser');
}
if (!Array.prototype.filter) {  
    Array.prototype.filter = function(fun /*, thisp*/){  
        var len = this.length;  
        if (typeof fun != "function"){  
            throw new TypeError();  
        }  
        var res = new Array();  
        var thisp = arguments[1];  
        for (var i = 0; i < len; i++){  
            if (i in this){  
                var val = this[i]; // in case fun mutates this  
                if (fun.call(thisp, val, i, this)) {  
                    res.push(val);  
                }  
            }  
        }  
        return res;  
    };  
}
if (!Array.prototype.indexOf)
{
  Array.prototype.indexOf = function(elt /*, from*/)
  {
    var len = this.length >>> 0;

    var from = Number(arguments[1]) || 0;
    from = (from < 0)
         ? Math.ceil(from)
         : Math.floor(from);
    if (from < 0)
      from += len;

    for (; from < len; from++)
    {
      if (from in this &&
          this[from] === elt)
        return from;
    }
    return -1;
  };
}