import express from 'express'
import { connection } from './database/connection'

//controllers
import controller from './app/controllers/controller'
import postsController from './app/controllers/posts.controller'

const app = express()
const port: number = 4000

if(connection()){

    app.use(express.json());

    //routes
    app.get('/api/v1', controller.healthCheck)
    //users section
    app.post('/api/v1/user/create', controller.storeNewUser)
    app.get('/api/v1/user/all', controller.getAllUSers)
    app.get('/api/v1/user/:userId', controller.getUser)
    //post section
    app.post('/api/v1/post/create', postsController.storeNewPost)
    app.get('/api/v1/post/all', postsController.getAllPost)
    app.get('/api/v1/post/user/:userId', postsController.getUserPosts)
    app.get('/api/v1/post/:postId', postsController.getPost)

    app.listen(port, () => console.log(`app listening on port ${port}`))
}else{
    console.error('app did not connect to database')
}