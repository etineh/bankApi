import { ApiProperty } from "@nestjs/swagger";
import { IsEmail, IsNumber, IsString } from "class-validator";

export class UpdateSchemaDto {
    
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
        description: "This is the user card number from his other bank for direct top-up",
        example: "Noble"
    })
    @IsString()
    cardNo: string;

}