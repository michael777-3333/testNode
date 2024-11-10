import { Router } from 'express';
import { PetsHttp } from '../modules/pets/pets.controller.js';

const petsRoutes = Router()

petsRoutes.get('/',[

],PetsHttp.getPets)

export default petsRoutes