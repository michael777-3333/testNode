import { isValidObjectId } from 'mongoose';
import User from '../modules/users/users.entity.js'

export const isValidId = async (req, res, next) => {
    try {
        req.params.id = req.params.id.trim()
        if (!isValidObjectId(req.params.id)) return res.status(404).json({ msg: `The id: ${req.params.id} does not is valid` });

        next();
    } catch (error) {
        return res.status(401).json({ msg: "Unauthorized" })
    }

}


// validate if exist id
export const existId = async (req, res, next) => {
    try {
        req.params.id = req.params.id.trim()
        const userId = await User.findById(req.params.id)

        if (!userId) return res.status(404).json({ msg: `The id: ${req.params.id} does not exists` });

        next();
    } catch (error) {
        return res.status(401).json({ msg: "Unauthorized" })
    }
}