var http = require('https');
var fs = require('fs');

const PORT=8080; 

fs.readFile('../public/index.html', function (err, html) {

    if (err) throw err;    

    http.createServer(function(request, response) {  
        response.writeHeader(200, {"Content-Type": "text/html"});  
        response.write(html);  
        response.end();  
    }).listen(PORT);
});

// I haven't seen an app.js file that looks like that? 
// i think it usually looks like this:

// import React from 'react';
// import Nav from './nav.js';

// function App() {
//     return (
//         <body>
//             <Nav />
//         </body>
//     )
// }

