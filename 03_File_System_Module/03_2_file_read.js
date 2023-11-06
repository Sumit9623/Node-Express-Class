
let fs = require('fs');

// 1) readFileSync  --> read file Syncronously
// const txt = fs.readFileSync('03_1_demo.txt','utf-8');
// console.log(txt);
// console.log("kkkkkkkkkkkkkkkkk");

// 2) readFile  --> read file Asyncronously
//  third function is callback function
const file_read_asy = fs.readFile('03_1_demo.txt','utf-8',(err,txt)=>{
    console.log(txt);
});
console.log("kkkkkkkkkkkkkkkkkkk");