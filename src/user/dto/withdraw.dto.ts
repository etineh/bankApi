import { ApiProperty } from "@nestjs/swagger";
import { IsString} from "class-validator";

export class WithdrawDto{
    
    @ApiProperty({
        description: "This is the receiver account number",
        example: "7034872374"
    })
    @IsString()
    phone: string;

    @ApiProperty({
        description: "This is the amount you want to transfer",
        example: "30000"
    })
    @IsString()
    amount: string;
    
}