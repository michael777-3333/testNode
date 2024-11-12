import express from 'express';
import fs from 'fs'
import path from 'path';
import { pathToFileURL } from 'url';
import { connection } from '../database/connection.js';

class Server {
  constructor() {
    this.app = express();
    this.connect();
    this.middlewares();
  }

  async connect() {
    await connection();
  }
  middlewares() {
    // this.app.use(morgan('short'));
    this.app.use(express.json());
    // this.app.use(cors());
    
  }

  disable() {
    // remove x-powered-by header
    this.app.disable('x-powered-by');
  }

  async routes(dir) {
    console.log('Registrando rutas...');
    if (dir) {
      const files = fs.readdirSync(dir);
      for (const file of files) {
        const filePath = path.join(dir, file);
        // path to file URL
        const modelURL = pathToFileURL(filePath).href;

        if (fs.lstatSync(filePath).isFile() && file.endsWith('.js')) {
          const routeName = `/${file.replace('.js', '')}`;

          const routeModule = await import(modelURL);

          if (routeModule.default) {
            this.app.use(routeName, routeModule.default);
            console.log(`Rutas registradas: ${routeName}`);
          } else {
            console.warn(`Módulo sin exportación predeterminada en ${filePath}`);
          }
        }
      }
    }

    //  404 handler
    this.app.use((req, res) => {
      res.status(404).send('<h1>404 Not Found</h1>');
    });

  }


  listen() {
    this.app.listen(3000, () => { console.log('Server Online: ', process.env.PORT || 3000); });
  }


}

export default Server;

