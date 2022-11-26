import { ApiProperty } from "@nestjs/swagger";
import { IsString} from "class-validator";

export class AccountDto{

    @ApiProperty({
        description: "The user token access generated from login",
        example: "7032816634"
    })
    @IsString()
    phone: number;
    
}