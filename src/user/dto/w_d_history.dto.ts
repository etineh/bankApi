import { IsEmail, IsString } from "class-validator";

export class With_Dep_Save {
    @IsString()
    userId: string;

    @IsString()
    type: string;

    @IsString()
    name: string;

    @IsString()
    lName: string;

    @IsString()
    acountNo: number;

    @IsString()
    bank: string;

    @IsString()
    amount: number;

    @IsString()
    balance: number;
}