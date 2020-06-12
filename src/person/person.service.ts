import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Person } from './person.entity';
import { Repository } from 'typeorm';

@Injectable()
export class PersonService {
    constructor(
        @InjectRepository(Person) private personRepository: Repository<Person>
    ) { }

    findAll(): Promise<Person[]> {
        return this.personRepository.find();
    }

    findOne(id: string): Promise<Person> {
        return this.personRepository.findOne(id);
    }

    async remove(id: string): Promise<void> {
        await this.personRepository.delete(id);
    }

}
