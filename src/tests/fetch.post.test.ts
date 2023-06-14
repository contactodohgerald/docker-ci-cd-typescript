import { beforeEach, describe, expect, jest, test } from '@jest/globals';

import PostsModel from '../database/model/posts.model';
import { GetPosts } from '../app/services/posts';

describe('Fetch Posts', () => {

    let postService: any

    beforeEach(() => {
        postService = new GetPosts() // Create an instance of the GetPosts
    })

    test('should fetch posts successfully', async () => {
        const samplePosts = [
            {
                _id: "id",
                userId: "6483945b1f3484ce36a4f791",
                title: "first title",
                post: "just trying out things",
                views: 0
            }
        ] // Create a sample array of posts for testing

        jest.spyOn(PostsModel, 'find').mockResolvedValue(samplePosts) // Mock the find method of the PostsModel to return the sample posts

        const posts = await postService.getPosts()

        expect(PostsModel.find).toHaveBeenCalledTimes(1); // Ensure the find method is called once
        expect(posts).toEqual(samplePosts); // Ensure the returned posts match the sample posts
    });

    test('should handle fetch error', async () => {
        // Mock the find method of the UserModel to throw an error
        jest.spyOn(PostsModel, 'find').mockRejectedValue(new Error('Database error'));
        try {
            await postService.getPosts()  // Call the getPosts method
        } catch (error: any) {
            expect(error.message).toBe('Database error'); // Ensure the error message is as expected
        }
    });
});
