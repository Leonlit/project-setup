const utility = require("../utilities");

function basicWebApp (fileLocation) {
    const fileName = [{name: "assets"},
                        {name: "index.html", content: utility.basicHtml},
                        {name: "css"},
                        {name: "css/mobile.css", content: ""},
                        {name: "css/tablet.css", content: ""},
                        {name: "css/desktop.css", content: ""},
                        {name: "scripts"},
                        {name: "scripts/main.js", content: "'use strict'\n"},
                        {name: ".gitignore", content: "node_modules \n.env"}, 
                        {name: "README.md", content: ""}];

    utility.generateFiles(fileName, fileLocation);
}
module.exports = {basicWebApp};