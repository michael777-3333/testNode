import express from 'express';
import fs from 'fs'
import path from 'path';
import {pathToFileURL} from 'url';

class Server {
  constructor() {
    this.app = express();
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

  }


  listen() {
    this.app.listen(3000, () => { console.log('Server Online: ', 3000); });
  }


}

export default Server;

// tests: C:\Users\wilme\Documents\python\n\testNode\routes\pets
// Server Online:  3000
// node:internal/errors:496
//     ErrorCaptureStackTrace(err);
//     ^

// Error [ERR_UNSUPPORTED_ESM_URL_SCHEME]: Only URLs with a scheme in: file, data, and node are supported by the default ESM loader. On Windows, absolute paths must be valid file:// URLs. Received protocol 'c:'