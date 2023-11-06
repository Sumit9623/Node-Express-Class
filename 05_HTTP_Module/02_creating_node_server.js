
// const { json } = require('body-parser');
const http = require('http');
const fs = require('fs');

const server = http.createServer((req,res)=>{
    console.log("Server Started : ",req.url);
    if(req.url.startsWith('/product')){
        fs.readFile('05_HTTP_Module\\abc.html','utf-8',(err,data)=>{
            res.setHeader('Content-Type','text/html')
            const id = req.url.split('/')[2];
            console.log("id : ",id);
            const data_1 = JSON.parse(fs.readFileSync('Dummy.json','utf-8'));
            const product = data_1.products[id];
            data = data.replace('**title**',product.title);
            data = data.replace('**url**',product.thumbnail);
            data = data.replace('**price**',product.price);
            data = data.replace('**rating**',product.rating);
            res.end(data);
        });
    }
    else{
        switch (req.url){
            case '/':
                fs.readFile('05_HTTP_Module\\abc.html','utf-8',(err,data)=>{
                    res.setHeader('Content-Type','text/html')
                    res.end(data);
                });
                break;
            case '/api':
                fs.readFile('Dummy.json','utf-8',(err,data)=>{
                    res.setHeader('Content-Type','application/json')
                    res.end(data);
                });
                break;
            default:
                res.writeHead(404,'Not - Found');
                res.end();
        }
    }
})
server.listen(8080);