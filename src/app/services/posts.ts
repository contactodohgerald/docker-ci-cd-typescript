import Posts from "../../database/model/posts.model";


export class GetPosts {

    async getPosts() {
        return await Posts.find()
    }

    async getPostsConidtion(data: any) {
        return await Posts.where(data).find()
    }

    async getPost(id: string) {
        return await Posts.findById({_id: id})
    }

    async savePost(data: any) {
        return await Posts.create(data)
    }
}