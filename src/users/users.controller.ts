import { Body, Controller, Delete, Get, Param, ParseIntPipe, Post, Put } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto/create-user.dto';
import { MobilePipe } from 'src/pipes/validate/mobile/mobile.pipe';
@Controller('users')
export class UsersController {
    constructor(private readonly userService: UsersService) { }

    @Get()
    index(): object {
        return this.userService.getAll()
    }
    @Get("/:id")
    get(@Param('id', ParseIntPipe) id: string) {
        return this.userService.getById(Number(id))
    }
    @Post()
    store(@Body(new MobilePipe()) createUserDto: CreateUserDto) {
        return this.userService.createUser(createUserDto);
    }
    @Put("/:id")
    update(@Param('id') id: number, @Body() data: object) {
        return this.userService.updateUser(id, data);
    }
    @Delete("/:id")
    delete(@Param('id') id: number) {
        return this.userService.deleteUser(id);
    }
}
