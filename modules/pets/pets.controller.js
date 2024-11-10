import { PetsServices } from "./pets.service.js";

const PetsHttp={
    getPets:(req,res)=>{
        try {
            return PetsServices.getPets(req,res)
        } catch (error) {
            return error
        }
    }
}

export {
    PetsHttp
}