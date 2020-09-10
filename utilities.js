const fs = require("fs");

function generateFiles (fileName, fileLocation) {
    fileName.forEach(file => {
        const location = `${fileLocation}/${file.name}`;
        if (!fs.existsSync(location)) {
            if (file["name"].indexOf(".") === -1) {
                try {
                    fs.mkdirSync(location);
                    createdFolder(location)
                }catch (err) {
                    console.log(`Failed to create folder ${location}`);
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
                    createdFile(location);
                }catch (err) {
                    console.log(`Failed to create file ${location}`);
                    console.error(err);
                }
            }
        }else {
            console.log("File exists");
        }
    });
}

const createdFolder = (fileName) => console.log(`Created Folder ${fileName}`);

const createdFile = (fileName) => console.log(`Created File ${fileName}`);

module.exports = {generateFiles};