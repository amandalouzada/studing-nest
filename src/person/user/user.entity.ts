import { Entity, Column, PrimaryGeneratedColumn, JoinColumn, OneToOne, BeforeUpdate, BeforeInsert, UpdateDateColumn, CreateDateColumn } from 'typeorm';
import { PersonEntity } from '../person.entity';
import { createHmac } from 'crypto'

@Entity('user')
export class UserEntity {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column({ nullable: false, unique:true })
    user: string;

    @Column({ nullable: false, select: false })
    password: string;

    @BeforeUpdate()
    @BeforeInsert()
    hashPassword() {
        const hmac = createHmac('sha256', 'env_key')
        const password = hmac.update(this.password).digest('hex')
        this.password = password;
    }

    @Column({ unique: true, nullable: false })
    email: string;

    @OneToOne(type => PersonEntity)
    @JoinColumn()
    person: PersonEntity;

    @CreateDateColumn()
    createdAt: string
  
    @UpdateDateColumn()
    updatedAt: string

}