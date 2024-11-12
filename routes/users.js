import { Router } from 'express';
import { UsersHttp } from '../modules/users/users.controller.js';
import { validateId } from '../middlewares/index.js';
const usersRoutes = Router();

usersRoutes.get('/', [

], UsersHttp.getUsers)


usersRoutes.get('/filters', [

], UsersHttp.getUsersfilters)

usersRoutes.post('/test', [

], UsersHttp.returnBody)

usersRoutes.post('/add', [
    // validateId.isValidId
], UsersHttp.addNewUser)

usersRoutes.put('/:id', [
    validateId.isValidId,
    validateId.existId
], UsersHttp.updateUserById)

usersRoutes.delete('/:id', [
    validateId.isValidId,
    validateId.existId
], UsersHttp.deleteUserById)


export default usersRoutes