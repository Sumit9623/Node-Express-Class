

//  See the package.json, in script we have dev uses nodemon
//  using npm run dev we can start live server
const express = require('express');
console.log("I am here");
const server = express();
server.listen(8080);