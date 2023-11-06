// Middlewares
// Middlewares can be used for adding functionalities like logging, authentication, adding headers to response, routing etc
// Middleware can process request objects multiple times before the server works for that request.
// There are different types of middleware
    // Application-level middleware
    // Router-level middleware
    // Error-handling middleware
    // Built-in middleware
    // Third-party middleware

// Below is the middleware function contain 3 parameters
// 1) protected route
// 2) middleware function
// 3) call back function executes after middleware
const express = require('express');
const server = express();
server.use('/',
            (req,res,next)=>{
                console.log("I am in middleware");
                // printing logs of request
                // res.send(`${new Date()}    ${req.ip}    ${req.method}     ${req.hostname}    ${req.get('User-Agent')}`);
                next()
            },
            (req,res)=>{
                // console.log("in callback function after middle ware");
                res.json({name:"Sumit",Roll_No:42370});
            }
)
server.listen(8080);