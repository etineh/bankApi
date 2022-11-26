import { ApiProperty } from "@nestjs/swagger";
import { IsString} from "class-validator";

export class CardDto{
    
    @ApiProperty({
        description: "This is the card of user other account that can be use to deposit direct. Card number should be 16 digits",
        example: "1234567890987654"
    })
    @IsString()
    cardNo: string;

    @ApiProperty({
        description: "This user password",
        example: "yes23"
    })
    @IsString()
    password: string;
    
}