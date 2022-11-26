import { ApiProperty } from "@nestjs/swagger";
import { IsString, IsEmail, IsNumber, IsNumberString } from "class-validator";

export class CreateSchemaDto{
    @IsString()
    token: string;
    
    @ApiProperty({
        description: "This is the first name of the user",
        example: "Noble"
    })
    @IsString()
    name: string;

    @ApiProperty({
        description: "This is the last name of the user",
        example: "John"
    })
    @IsString()
    lName: string;
    
    @ApiProperty({
        description: "This is the email of the user",
        example: "noble@gmail.com"
    })
    @IsEmail()
    email: string;

    @ApiProperty({
        description: "This is phone number of the user, which will be used as her account number",
        example: "7032328934"
    })
    @IsString()
    phone: number;
    
    @ApiProperty({
        description: "This is the user password",
        example: "yes23?"
    })
    @IsString()
    password: string;

    @IsString()
    bankName: string;

    @IsString()
    cardNo: string;

    @IsString()
    amount: string;
}