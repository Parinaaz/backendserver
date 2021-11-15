'use strict';

var i = 5;
//undefined is a keyword 
var undefined = 5; 

//the writable property of first obj is set to false
 var firstObj = {};
 Object.defineProperty(firstObj, 'x', { value: 42, writable: false });
firstObj.x = 9;  
console.log(firstObj.x)

//only getter no setter 
var secondObj = {x : "", get x1() { return x; }  };
secondObj.x1 = 5; 
console.log(secondObj.x);

//prevent extensions set
var noext = {};
Object.preventExtensions(noext);
noext.newProp = 'hello'; 
