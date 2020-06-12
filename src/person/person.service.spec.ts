import { Test, TestingModule } from '@nestjs/testing';
import { getRepositoryToken } from '@nestjs/typeorm';
import { PersonService } from './person.service';
import { Repository } from 'typeorm';
import { PersonEntity } from './person.entity';

describe('PersonService', () => {
  let repository: Repository<PersonEntity>;
  let service: PersonService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        PersonService,
        {
          provide: getRepositoryToken(PersonEntity),
          useValue: {
            save: jest.fn(),
            findOne: jest.fn(),
            find: jest.fn(),
            delete: jest.fn(),
            metadata: {
              propertiesMap: {},
            }
          }
        }]
    }).compile();
    service = module.get(PersonService);
    repository = module.get(getRepositoryToken(PersonEntity));
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
    expect(repository).toBeDefined();
  });

  it('find person', async () => {
    const person = { id: '1384dade-6029-4779-bbab-c58c006c7bed', name: 'Amanda Louzada', fantasyName: '', document: '91651931054', type: 'pf' };
    jest.spyOn(repository, 'findOne').mockResolvedValue(person as PersonEntity);
    const personResult = await service.findOne(person.id);
    expect(personResult).toBe(person)
  });

  it('find all person', async () => {
    const persons = [{ id: '1384dade-6029-4779-bbab-c58c006c7bed', name: 'Amanda Louzada', fantasyName: '', document: '91651931054', type: 'pf' }];
    jest.spyOn(repository, 'find').mockResolvedValue(persons as PersonEntity[]);
    const personsResult = await service.findAll();
    expect(personsResult).toBe(persons)
  });

  it('remove person', async () => {
    const person = { id: '1384dade-6029-4779-bbab-c58c006c7bed', name: 'Amanda Louzada', fantasyName: '', document: '91651931054', type: 'pf' };
    jest.spyOn(repository, 'delete').mockResolvedValue({ raw: 1, affected: 1 });
    const deleteFunction = async () => {
      await service.remove(person.id)
    };
    expect(deleteFunction).not.toThrowError();
  });

});
