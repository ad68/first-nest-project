import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto/create-user.dto';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './entities/user.entity';
import { UpdateUserDto } from './dto/create-user.dto/update-user.dto';
@Injectable()
export class UsersService {
    constructor(
        @InjectRepository(User)
        private userRepository: Repository<User>
    ) { }
    /*  private users: any = [{
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
     ] */
    getAll(): Promise<Array<User>> {
        return this.userRepository.find()
        /* return {
            data: this.users,
            statusCode: 200,
            message: "get all users"
        } */
    }
    getById(id: number): Promise<User | null> {
        return this.userRepository.findOneBy({ id })
        /*return this.userRepository.findOneByOrFail({ id })
         */        /* return {
         data: this.users.find((el: any) => el.id === id),
         statusCode: 200,
         message: "get user by Id"
     } */
    }
    createUser(createUserDto: CreateUserDto): Promise<User> {
        const newUser = this.userRepository.create(createUserDto)
        return this.userRepository.save(newUser)
    }
    /*   createUser(createUserDto: CreateUserDto): object {
          if (createUserDto) {
              this.users.push(createUserDto)
          }
          return {
              data: this.users,
              statusCode: 200,
              message: "user created"
          }
      } */
    updateUser(id: number, updateUserDto: UpdateUserDto): Promise<object> {
        return this.userRepository.update(id, updateUserDto)
        /*   let userIndex = this.users.findIndex(el => el.id == id)
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
          return this.users */
    }
    deleteUser(id: number): Promise<object> {
        return this.userRepository.delete(id)

        /* let userIndex = this.users.findIndex(el => el.id == id)
        if (userIndex === -1) {
            return {
                data: null,
                statusCode: 400,
                message: "id is not defined!"
            }
        }

        return this.users.filter(el => el.id != id) */
    }
}
