import { beforeEach, describe, expect, jest, test } from '@jest/globals';

import UserModel from '../database/model/users.model';
import { GetUsers } from '../app/services/users';

describe('Fetch Users', () => {

    let userService: any

    beforeEach(() => {
       userService = new GetUsers() // Create an instance of the GetPosts
    })

    test('should fetch users successfully', async () => {
        const sampleUsers = [
            {
                _id: "id",
                username: "xanta",
                email: "xanta@gmail.com",
                password: "1234567890"
            }
        ] // Create a sample array of users for testing

        jest.spyOn(UserModel, 'find').mockResolvedValue(sampleUsers) // Mock the find method of the UserModel to return the sample users

        const users = await userService.getUsers()

        expect(UserModel.find).toHaveBeenCalledTimes(1); // Ensure the find method is called once
        expect(users).toEqual(sampleUsers); // Ensure the returned users match the sample users
    });

    test('should handle fetch error', async () => {
        // Mock the find method of the UserModel to throw an error
        jest.spyOn(UserModel, 'find').mockRejectedValue(new Error('Database error'));
        try {
            await userService.getUsers()  // Call the getUsers method
        } catch (error: any) {
            expect(error.message).toBe('Database error'); // Ensure the error message is as expected
        }
    });
});
