const UsersService={
    getAllUsers:async(req,res)=>{
        try { 
            const users =['michael','wilmer']
            return res.status(200).json(users) 
        } catch (error) {
            throw error
        }
    },

    getAllUsersFilters:async(req,res)=>{
        try { 
            const users =['mike','wil']
            return res.status(200).json(users) 
        } catch (error) {
            throw error
        }
    }
}

export {
    UsersService
}