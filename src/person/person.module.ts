import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PersonEntity } from './person.entity';
import { PersonService } from './person.service';
import { UserEntity } from './user/user.entity';
import { UserService } from './user/user.service';

@Module({
    imports: [
        TypeOrmModule.forFeature([PersonEntity,UserEntity])
    ],
    providers: [PersonService, UserService]
})
export class PersonModule { }
