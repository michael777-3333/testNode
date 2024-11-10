import Server from './models/server.js';
import { fileURLToPath } from 'url';
import fs from 'fs'
import path from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const routesDir = path.join(__dirname, 'routes');
const server = new Server();
server.routes(routesDir)
server.listen();