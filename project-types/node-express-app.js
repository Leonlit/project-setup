const utility = require("../utilities");
const template = require("../template");

const basicExpressServer = 
`const express = require('express')
const app = express()

const PORT = process.env.PORT = 4000;

app.use(express.static("public"));

app.listen(PORT, () => {
    console.log(\`Server running at: http://localhost:\${PORT}\`);
});
`

function nodeExpressApp (fileLocation) {
    const fileName = [{name: "server.js", content: basicExpressServer},
                        {name: "public"},
                        ...template.getBasicWebAppFiles("public/"),
                        {name: ".gitignore", content: "node_modules \n.env"}, 
                        {name: "README.md", content: ""}];

    utility.generateFiles(fileName, fileLocation);
}

module.exports = {nodeExpressApp};