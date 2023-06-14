import Users from "../../database/model/users.model";

export class GetUsers {

    async getUsers() {
        return await Users.find();
    }
    
    async getUser(id: string) {
        return await Users.findById({_id: id})
    }

    async saveUser(data: any) {
        return await Users.create(data)
    }

}