import User from './users.entity.js'

const UsersService = {
    getAllUsers: async (req, res) => {
        try {
            const users = await User.find()
            return res.status(200).json(users)
        } catch (error) {
            throw error
        }
    },

    getAllUsersFilters: async (req, res) => {
        try {
            const users = ['mike', 'wil']
            return res.status(200).json(users)
        } catch (error) {
            throw error
        }
    },

    addUser: async (req, res) => {
        try {
            const newUser = new User(req.body)
            await newUser.save()
            return res.status(201).json({ msg: 'User created' })

        } catch (error) {
            throw error
        }
    },

    updateUser: async (req, res) => {
        try {

            const updatedUser = await User.findByIdAndUpdate(req.params.id, req.body, { new: true })

            if (!updatedUser) return res.status(404).json({ msg: 'User not found' })
            
            return res.status(200).json({ msg: 'User updated' })

        } catch (error) {
            throw error
        }
    },

    deleteUser: async (req, res) => {
        try {
            // validate if exist id
            // const user = await User.findById(req.params.id)
            // if (!user) return res.status(404).json({ msg: 'User not found' })
            await User.findByIdAndDelete(req.params.id)
            return res.status(200).json({ msg: 'User deleted' })

        } catch (error) {
            throw error
        }
    },
}
export {
    UsersService
}