import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const projectRoot = path.resolve(__dirname, '..');
const envPath = path.join(projectRoot, '.env');
const envExamplePath = path.join(projectRoot, '.env.example');

if (fs.existsSync(envPath)) {
   console.log('.env already exists. Skipping sample file creation.');
   process.exit(0);
}

if (!fs.existsSync(envExamplePath)) {
   console.log('.env.example not found. Skipping sample file creation.');
   process.exit(0);
}

fs.copyFileSync(envExamplePath, envPath);
console.log('Sample .env created from .env.example.');
