import { Injectable, Param } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { FilterQuery, Model } from 'mongoose';
import { CreateSchemaDto } from './dto/create-user.dto';
import { UpdateSchemaDto } from './dto/update-user.dto';
import { User, UserDocument } from './schemas/user.schema';

@Injectable()
export class UserService {

    constructor(@InjectModel(User.name) public UserModel: Model<UserDocument>) {}

    async get(find: FilterQuery<User>): Promise<User[]> {
        let gret = this.UserModel.find({find});
        return gret
    }

    async create(body: CreateSchemaDto) {
        const createUser = new this.UserModel(body)
        const validPhone = await this.UserModel.findOne({phone : body.phone})
        const validEmail = await this.UserModel.findOne({email : body.email})
        if (validPhone ){
            return {status: "Phone number already exist"}
        } else {
            if(validEmail){
                return {status: "Email already exist"}
            } else {
                createUser.save()
                return {status: "Registration Successful. Go to login page"}
            }
        }
    }

    async edit(id: string, update: UpdateSchemaDto): Promise<User>{
        return this.UserModel.findByIdAndUpdate(id, update)
    }

    async showOne(id: string): Promise<User> {
        return this.UserModel.findById(id)
    }

    async deleteOne(id: string ): Promise<User>{
        return this.UserModel.findByIdAndDelete(id) 
    }

    async findByEmail(email: string){
        return this.UserModel.findOne({email}) 
    }
}
