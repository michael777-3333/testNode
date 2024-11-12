import Server from './models/server.js';
// import { fileURLToPath } from 'url';
import path from 'path';
import 'dotenv/config'

// const __filename = fileURLToPath(import.meta.url);
// const __dirname = path.dirname(__filename);
// const routesDir = path.join(__dirname, 'routes');

var absolutePath = path.resolve();
const routesDir = path.join(absolutePath, 'routes');

const server = new Server();
server.disable();
server.routes(routesDir)
server.listen();