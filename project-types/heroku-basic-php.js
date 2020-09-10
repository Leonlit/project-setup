const utility = require("../utilities");
const template = require("../template");

const appJson = `
{
    "name": "",
    "description": "",
    "repository": "",
    "addons": []
}
`

const composerJson = `
{
    "require" : {
        "php": "^7.2.0"
    }
}
`

function herokuBasicPhp (fileLocation) {
    const fileName = [{name: "Procfile", content: "web: vendor/bin/heroku-php-apache2 public/", exception: true},
                        {name: "app.json", content: appJson},
                        {name: "composer.json", content: composerJson},
                        {name: "public"},
                        ...template.getBasicWebAppFiles("public/", ".php"),
                        {name: ".gitignore", content: "secret \n.env"}];

    utility.generateFiles(fileName, fileLocation);
}
module.exports = {herokuBasicPhp};