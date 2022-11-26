import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { HydratedDocument, Document } from "mongoose";

export type UserDocument = HydratedDocument<User>;

@Schema()
export class User {
    
    @Prop()
    token: string;

    @Prop()
    name: string;

    @Prop()
    lName: string;
    
    @Prop()
    email: string;

    @Prop()
    phone: number;
    
    @Prop()
    password: string;

    @Prop()
    bankName: string;

    @Prop()
    cardNo: string ;

    @Prop()
    amount: number;
}

export const UserSchema = SchemaFactory.createForClass(User)