const utility = require("../utilities");

const basicExpressServer= `const express = require('express')
                            const app = express()
                            \n
                            const PORT = process.env.PORT = 4000;
                            \n
                            app.use(express.static("public"));
                            \n
                            app.listen(PORT, () {
                                console.log("Server running at:", PORT);
                            });\n
                        `
const basicHtml = 
`<!DOCTYPE html>
<html lang='en'>
    \t<head>
        \t\t<meta charset='UTF-8'>
        \t\t<meta name='description' content=''>
        \t\t<meta name='keywords' content='HTMl, CSS, JS,'>
        \t\t<meta name='author' content='Leon Lit'>
        \t\t<meta name='viewport' content='width=device-width, initial-scale=1.0'>
        \t\t<link rel='icon' type='image/png' href='.png'/>
        \t\t<title></title>
        \t\t<link rel='stylesheet' href='.css'>
    \t</head>
    \t<body>\t\t
    \t</body>
</html>\n
<script src=''></script>
`


function nodeExpressApp (fileLocation) {
    const fileName = [{name: "server.js", content: basicExpressServer},
                        {name: "public"},
                        {name: "public/assets"},
                        {name: "public/index.html", content: basicHtml},
                        {name: "public/main.css", content: ""},
                        {name: "public/main.js", content: "'use strict'\n"},
                        {name: ".gitignore", content: "node_modules \n.env"}, 
                        {name: "README.md", content: ""}];

    utility.generateFiles(fileName, fileLocation);
}

module.exports = {nodeExpressApp};