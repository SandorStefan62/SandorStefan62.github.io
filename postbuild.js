import fs from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const distDir = path.join(__dirname, 'dist', 'assets');

async function updateFile() {
    try {
        const files = await fs.readdir(distDir);
        const fileName = files.find(file => file.endsWith('.js'));

        if (!fileName) {
            console.error('Built javascript file not found');
            process.exit(1);
        }

        const filePath = path.join(distDir, fileName);
        let fileContent = await fs.readFile(filePath, 'utf8');

        fileContent = fileContent.replace(/holistic\./g, '');
        fileContent = fileContent.replace(/ei\./g, '');

        await fs.writeFile(filePath, fileContent, 'utf8');

        console.log(`Updated ${fileName}`);
    } catch (error) {
        console.error('Error updating file: ', error);
    }
}

updateFile();