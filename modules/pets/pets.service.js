const PetsServices={
    getPets:async(req,res)=>{
        try {
            const pets =['yate','lucas']
            return res.status(200).json(pets) 
        } catch (error) {
            throw error
        }
    }
}

export {
    PetsServices
}