import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn } from 'typeorm';

@Entity('person')
export class PersonEntity {
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

    @CreateDateColumn()
    createdAt: string
  
    @UpdateDateColumn()
    updatedAt: string
}