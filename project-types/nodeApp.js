function nodeApp (fileLocation) {
    const fs = require("fs");
    const fileName = [{name: "index.js", content: ""},
                        {name: "assets"}, 
                        {name: ".gitignore", content: "node_modules \n.env"}, 
                        {name: "Readme.md", content: ""}];
    console.log("test");
    fileName.forEach(file => {
        const location = `${fileLocation}/${file.name}`;
        if (!fs.existsSync(location)) {
            if (file["name"].indexOf(".") === -1) {
                try {
                    fs.mkdirSync(location);
                    //createdFolder(file)
                }catch (err) {
                    console.log(`Failed to create folder ${file.name}`);
                    console.error(err);
                }
            }else {
                try {
                    fs.open(location, "w", (err, file) => {
                        if (err) {
                            throw err;
                        }
                    });
                    if (file.content) {
                        fs.writeFile(location, file.content, function (err) {
                            if (err){ 
                                throw err;
                            }
                        });
                    }
                    //createdFile(file);
                }catch (err) {
                    console.log(`Failed to create file ${file.name}`);
                    console.error(err);
                }
            }
        }else {
            console.log("File exists");
        }
    });
}

module.exports = {nodeApp};