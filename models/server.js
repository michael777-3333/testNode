import express from 'express';
import fs from 'fs'
import path from 'path';

class Server {
    constructor() {
        this.app = express();
    }

    async routes(dir) {
        if (dir) {
            const files = fs.readdirSync(dir);
    
        for (const file of files) {
          const filePath = path.join(dir, file);
    
          if (fs.lstatSync(filePath).isFile() && file.endsWith('.js')) {
            const routeName = `/${file.replace('.js', '')}`;
            
            const routeModule = await import(filePath);
    
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