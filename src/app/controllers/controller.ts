import { Request, Response } from "express"
import asyncHandler from "express-async-handler"
import { GetUsers } from "../services/users"


class Controller {
    private userInstance

    constructor () {
        this.userInstance = new GetUsers()
    }

    healthCheck = asyncHandler((req: Request, res: Response) => {
        res.status(200).json({status: true, message: "this is a health check !!!"})
    })

    storeNewUser = asyncHandler(async (req: Request, res: Response): Promise<any> => {
        const body : Record<string, any> = req.body

        const {username, email, password} = body

        const users = await this.userInstance.saveUser({
            username, email, password
        })

        return res.status(201).json({status: true, message: "created successfully", data: users})
    })

    getAllUSers = asyncHandler(async (req: Request, res: Response): Promise<any> => {

        const users = await this.userInstance.getUsers()

        if(users.length == 0) return res.status(400).json({status: false, message: "no users was found", data: []})

        return res.status(200).json({status: true, message: "users returned successfully", data: users})
    })

    getUser = asyncHandler(async (req: Request, res: Response): Promise<any> => {
        const userId : string = req.params.userId

        const user = await this.userInstance.getUser(userId)

        if(!user) return res.status(400).json({status: false, message: "no user was found"})

        return res.status(200).json({status: true, message: "user returned successfully", data: user})
    })
}

export default new Controller()