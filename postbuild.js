const fs = require("fs");
const path = require("path");

const distDir = path.join(__dirname, 'dist', 'assets');
const fileName = fs.readdirSync(distDir).find(file => file.endsWith('.js'));

if (!fileName) {
    console.error('Built javascript file not found.');
    process.exit(1);
}

const filePath = path.join(distDir, fileName);
let fileContent = fs.readFileSync(filePath, 'utf8');

fileContent = fileContent.replace(/ei\./g, '');

fs.writeFileSync(filePath, fileContent, 'utf8');

console.log(`Updated ${fileName}`);