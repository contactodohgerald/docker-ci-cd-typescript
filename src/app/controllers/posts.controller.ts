import { Request, Response } from "express"
import asyncHandler from "express-async-handler"
import { GetPosts } from "../services/posts"
import { GetUsers } from "../services/users"

class PostController {
    private postInstance
    private userInstance

    constructor() {
        this.postInstance = new GetPosts();
        this.userInstance = new GetUsers()
    }

    storeNewPost = asyncHandler(async (req: Request, res: Response): Promise<any> => {
        const body : Record<string, any> = req.body

        const {userId, title, post} = body

        const user = await this.userInstance.getUser(userId)

        if(!user) return res.status(400).json({status: false, message: "no user was found"})

        const posts = await this.postInstance.savePost({
            userId: user?._id, title, post
        })

        return res.status(201).json({status: true, message: "created successfully", data: posts})
    })

    getAllPost = asyncHandler(async (req: Request, res: Response): Promise<any> => {
        const posts = await this.postInstance.getPosts()

        if(posts.length == 0) return res.status(400).json({status: false, message: "no posts was found", data: []})

        return res.status(200).json({status: true, message: "posts returned successfully", data: posts})
    })

    getUserPosts = asyncHandler(async (req: Request, res: Response): Promise<any> => {
        const userId : string = req.params?.userId

        const user = await this.userInstance.getUser(userId)

        if(!user) return res.status(400).json({status: false, message: "no user was found"})

        const posts = await this.postInstance.getPostsConidtion({userId: user?._id})

        if(posts.length == 0) return res.status(400).json({status: false, message: "no posts was found", data: []})

        return res.status(200).json({status: true, message: "posts returned successfully", data: posts})
    })

    getPost = asyncHandler(async (req: Request, res: Response): Promise<any> => {
        const postId : string = req.params?.postId

        const post = await this.postInstance.getPost(postId)

        if(!post) return res.status(400).json({status: false, message: "no post was found"})

        return res.status(200).json({status: true, message: "post returned successfully", data: post})
    })
}

export default new PostController()