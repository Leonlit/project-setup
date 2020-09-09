const utility = require("../utilities");

const basicExpressServer = 
`const express = require('express')
const app = express()

const PORT = process.env.PORT = 4000;

app.use(express.static("public"));

app.listen(PORT, () => {
    console.log("Server running at:", PORT);
});
`

function nodeExpressApp (fileLocation) {
    const fileName = [{name: "server.js", content: basicExpressServer},
                        {name: "public"},
                        {name: "public/assets"},
                        {name: "public/index.html", content: utility.basicHtml},
                        {name: "public/css"},
                        {name: "public/css/mobile.css", content: ""},
                        {name: "public/css/tablet.css", content: ""},
                        {name: "public/css/desktop.css", content: ""},
                        {name: "public/scripts"},
                        {name: "public/scripts/main.js", content: "'use strict'\n"},
                        {name: ".gitignore", content: "node_modules \n.env"}, 
                        {name: "README.md", content: ""}];

    utility.generateFiles(fileName, fileLocation);
}

module.exports = {nodeExpressApp};