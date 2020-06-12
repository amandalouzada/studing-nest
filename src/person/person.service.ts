import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { PersonEntity } from './person.entity';
import { Repository } from 'typeorm';

@Injectable()
export class PersonService {
    constructor(
        @InjectRepository(PersonEntity) private personRepository: Repository<PersonEntity>
    ) { }

    findAll(): Promise<PersonEntity[]> {
        return this.personRepository.find();
    }

    findOne(id: string): Promise<PersonEntity> {
        return this.personRepository.findOne(id);
    }

    async remove(id: string): Promise<void> {
        await this.personRepository.delete(id);
    }

}
