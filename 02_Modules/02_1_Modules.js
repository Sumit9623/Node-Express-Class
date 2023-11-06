//  in this we will learn about modules in Node
//  javaScripi has a feature that it can import and export modules
//  require method is used to use exported modules

//  There are mainly 2 methods for import and export
//  1) using exports object and require() method
//  2) using simple import  & export statements like javascript
//     for 2nd method we need to set package.json as "type":"module"

//  mostly 1st method is used

let mod2 = require('./02_2_Modules.js');
console.log(mod2);
console.log("Sum : ",mod2.sum(10,20),"Difference : ",mod2.diff(10,20));

// *********************************************************************************

// This also can be done using normal import export like in javascript
//  for this method need to set package.json  "type":module

// import {sum_1,diff_1} from './02_2_Modules.js';
// console.log("Sum : ",sum_1(10,20),"Difference : ",diff_1(10,20));


