import { Router } from 'express';
import { UsersHttp } from '../modules/users/users.controller.js';
const usersRoutes = Router();

usersRoutes.get('/',[

],UsersHttp.getUsers)


usersRoutes.get('/filters',[

],UsersHttp.getUsersfilters)
export default usersRoutes