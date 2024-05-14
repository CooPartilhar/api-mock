const fs = require('node:fs');

const folderName = './resources';

let jsonFiles = fs.readdirSync(folderName);

let dbContent = {};

for (var jsonFile of jsonFiles) {
    let content = require(`${folderName}/${jsonFile}`);
    let entityKey = Object.keys(content)[0];
    if (!dbContent.hasOwnProperty(entityKey)) {
        dbContent[entityKey] = content[entityKey];
    }
}

fs.writeFileSync('./db.json', JSON.stringify(dbContent));
