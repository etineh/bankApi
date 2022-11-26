import { Prop, SchemaFactory, Schema } from "@nestjs/mongoose";
import { HydratedDocument } from "mongoose";

export type UserDocument = HydratedDocument<W_d_history>;

@Schema()
export class W_d_history{
    @Prop()
    userId: string;

    @Prop()
    type: string;

    @Prop()
    name: string;

    @Prop()
    lName: string;

    @Prop()
    acountNo: number;

    @Prop()
    bank: string;

    @Prop()
    amount: number;

    @Prop()
    balance: number;
}

export const WithdrawSchema = SchemaFactory.createForClass(W_d_history)
