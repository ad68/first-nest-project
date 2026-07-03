import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto/create-user.dto';

@Injectable()
export class UsersService {
    private users: any = [{
        id: 1,
        name: "ali"
    },
    {
        id: 2,
        name: "mahdi"
    },
    {
        id: 3,
        name: "zahra"
    }
    ]
    getAll(): object {
        return {
            data: this.users,
            statusCode: 200,
            message: "get all users"
        }
    }
    getById(id: number): object {
        return {
            data: this.users.find((el: any) => el.id === id),
            statusCode: 200,
            message: "get user by Id"
        }
    }
    createUser(createUserDto: CreateUserDto): object {
        if (createUserDto) {
            this.users.push(createUserDto)
        }
        return {
            data: this.users,
            statusCode: 200,
            message: "user created"
        }
    }
    updateUser(id: number, data: any): any {
        let userIndex = this.users.findIndex(el => el.id == id)
        if (userIndex === -1) {
            return {
                data: null,
                statusCode: 400,
                message: "id is not defined!"
            }
        }
        this.users[userIndex] = {
            id: this.users[userIndex].id,
            ...data
        }
        return this.users
    }
    deleteUser(id: number): any {
        let userIndex = this.users.findIndex(el => el.id == id)
        if (userIndex === -1) {
            return {
                data: null,
                statusCode: 400,
                message: "id is not defined!"
            }
        }

        return this.users.filter(el => el.id != id)
    }
}
