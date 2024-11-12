import { UsersService } from "./users.service.js"

const UsersHttp = {
    getUsers: (req, res) => {
        try {
            return UsersService.getAllUsers(req, res)
        } catch (error) {

            return error
        }
    },

    getUsersfilters: (req, res) => {
        try {
            return UsersService.getAllUsersFilters(req, res)
        } catch (error) {
            return error
        }
    },

    returnBody: (req, res) => {
        let body = ''

        req.on('data', chunk => {
            body += chunk.toString()
        })

        req.on('end', () => {
            const data = JSON.parse(body)

            data.timestamp = Date.now()
            res.status(201).json(data)
        }
        )
    }
}
export {
    UsersHttp
}