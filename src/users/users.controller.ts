import { Controller, Get } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User, UserDocument } from './users.model';

@Controller('users')
export class UsersController {
    constructor(@InjectModel(User.name) private userModel: Model<UserDocument>) {}
    
    @Get()
    async users(){
        const users = await this.userModel.find();
        return users;
    }
}
