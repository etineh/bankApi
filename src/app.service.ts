import { Injectable } from '@nestjs/common';
import { CreateSchemaDto } from './user/dto/create-user.dto';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello there! Welcome to my bank app api.';
  }

}
