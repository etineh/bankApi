import { ApiProperty } from "@nestjs/swagger";
import { IsString, IsEmail, IsNumber, IsNumberString } from "class-validator";

export class LoginDto{
    
    @ApiProperty({
        description: "This is the email of the user",
        example: "noble@gmail.com"
    })
    @IsEmail()
    email: string;
    
    @ApiProperty({
        description: "This is the user password",
        example: "yes23?"
    })
    @IsString()
    password: string;
}