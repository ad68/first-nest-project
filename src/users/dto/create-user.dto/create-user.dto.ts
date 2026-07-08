import { IsInt, IsNotEmpty, IsString, Max, MaxLength, maxLength, Min, MinLength } from "class-validator";

export class CreateUserDto {
    @IsInt()
    @Min(1)
    @Max(100)
    id!: number;
    @IsString()
    @MinLength(3)
    @MaxLength(15)
    username!: string;
    @IsNotEmpty()
    mobile!: string;
}
