import { UsersService } from "./users.service.js" 

const UsersHttp={
    getUsers: (req,res)=>{
        try {
            return UsersService.getAllUsers(req,res)
        } catch (error) {
            
            return error
        }
    },

    getUsersfilters: (req,res)=>{
        try {
            return UsersService.getAllUsersFilters(req,res)
        } catch (error) {
            return error
        }
    }
}

export {
    UsersHttp
}