import { ApiProperty } from "@nestjs/swagger";
import { IsString} from "class-validator";

export class UserId{
    
    @ApiProperty({
        description: "This is the user profile/registeration Id",
        example: "637e20f32cb1f4e48c76d5a8"
    })
    @IsString()
    userId: string;
    
}