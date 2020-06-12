import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Person {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column({ nullable: false })
    name: string;

    @Column()
    fantasyName: string;

    @Column({ unique: true, nullable: false })
    document: string;

    @Column({ enum: ['pf', 'pj'], nullable: false })
    type: string;
}