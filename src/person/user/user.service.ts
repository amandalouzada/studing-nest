import { Injectable } from '@nestjs/common';
import { UserEntity } from './user.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class UserService {
    constructor(
        @InjectRepository(UserEntity) private userRepository: Repository<UserEntity>
    ) { }

    findByUser(user: string): Promise<UserEntity> {
        return this.userRepository.findOne({ where: { user: user } });
    }

    findByPerson(personId: string): Promise<UserEntity> {
        return this.userRepository.findOne({ where: { person: personId } });
    }
}

