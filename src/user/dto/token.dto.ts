import { ApiProperty } from "@nestjs/swagger";
import { IsString} from "class-validator";

export class TokenDto{
    
    @ApiProperty({
        description: "The user token access generated from login",
        example: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6Im5vYmxlQGdtYWlsLmNvbSIsInN1YiI6InllcyIsImlhdCI6MTY2OTQ1OTgzOCwiZXhwIjoxNjY5NDYwMzU4fQ.XFmtSlhUrACLw2E5agUbOUJW86lBdT6nkIvP2mOXmHM"
    })
    @IsString()
    token: string;
    
}