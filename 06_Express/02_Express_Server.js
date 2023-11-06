
// in this file we study about
//  1) server methods
//  2) request methods
//  3) response methods

const fs = require('fs');
const express = require('express');

const server = express();

// ***************************************************************************************************
// below is the list of express server metods
    // GET: Used to request data from a server.
    // POST: Used to send data to a server, often used for creating new resources.
    // PUT: Used to update or replace existing data on the server.
    // DELETE: Used to remove data from a server.
    // PATCH: Used to apply partial modifications to a resource on the server.
    // OPTIONS: Used to retrieve information about the communication options for the target resource.
    // HEAD: Similar to GET but used to retrieve only the headers of a response, typically for checking resource status.


// API - Endpoints - Routes
// run url on desktop postman
//  below is exaple for server methods
    server.get('/',(req,res)=>{
        res.json({type:'Get'});
    })
    server.post('/',(req,res)=>{
        res.json({type:'Post'});
    })
    server.put('/',(req,res)=>{
        res.json({type:'Put'});
    })
    server.delete('/',(req,res)=>{
        res.json({type:'Delete'});
    })
    server.patch('/',(req,res)=>{
        res.json({type:'Patch'});
    })

// ************************************************************************************
//  request methods  (Commonly used)
    // req.params: Access route parameters from the URL.
    // req.query: Access query parameters from the URL.
    // req.body: Access data sent in the request body.
    // req.headers: Access HTTP headers sent with the request.
    // req.cookies: Access cookies sent by the client.
    // req.method: Get the HTTP method used in the request.
    // req.url: Get the full URL of the request.
    // req.path: Get the path portion of the URL.
    // req.hostname: Get the hostname of the request.
    // req.protocol: Get the protocol used in the request.
    server.get('/request_methods/:id',(req,res)=>{

        // Use this url in browser for all parameters :
        // http://localhost:8080/request_methods/5?name=sumit

        // res.send(req.query);
        // res.json(req.params);
        res.send(req.url);
        // res.send(req.hostname);
        // res.send(req.path);
        // res.send(req.method);
    })

// ************************************************************************************
//  Response methods (commonly used)
    // res.send(): Sends a response to the client.
    // res.json(): Sends a JSON response to the client.
    // res.status(): Sets the HTTP status code of the response.
    // res.redirect(): Redirects the client to a different URL.
    // res.render(): Renders a view template using a template engine.
    // res.sendFile(): Sends a file as the response to the client.
    // res.cookie(): Sets a cookie in the client's browser.
    // res.clearCookie(): Clears a previously set cookie.
    // res.header(): Sets an HTTP header in the response.
    // res.end(): Ends the response process.

server.get('/response_methods',(req,res)=>{
    // res.send("Hello World");
    res.sendFile('D:/Sumit/Web Dev/Node Master Class/05_HTTP_Module/abc.html');
    // res.json(fs.readFileSync('Dummy.json','utf-8'));
    // res.status(404).send('Page not found');
    // res.redirect('/request_methods');
})

server.listen(8080,()=>{
    console.log("Server Started");
})