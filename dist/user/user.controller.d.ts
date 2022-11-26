import { FilterQuery } from 'mongoose';
import { CreateSchemaDto } from './dto/create-user.dto';
import { UpdateSchemaDto } from './dto/update-user.dto';
import { User } from './schemas/user.schema';
import { UserService } from './user.service';
export declare class UserController {
    private userService;
    constructor(userService: UserService);
    getUser(find: FilterQuery<User>): Promise<User[]>;
    save(body: CreateSchemaDto): Promise<{
        status: string;
    }>;
    getOne(userId: string): Promise<User>;
    update(id: string, body: UpdateSchemaDto): {
        success: boolean;
    };
    deleteOne(id: string): {
        success: boolean;
    };
}
