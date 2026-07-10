import { IsInt, IsNotEmpty, IsString, Max, MaxLength, maxLength, Min, MinLength } from "class-validator";

export class CreateUserDto {
    @IsString()
    @MinLength(3)
    @MaxLength(15)
    name!: string;
    @IsNotEmpty()
    mobile!: string;
}
