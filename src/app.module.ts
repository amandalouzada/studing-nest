import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PersonModule } from './person/person.module';
import { PersonEntity } from './person/person.entity';
import { UserEntity } from './person/user/user.entity';
import { UserService } from './person/user/user.service';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: ['.env.development.local', '.env.development'],
      isGlobal: true
    }),
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env.DB_HOST,
      port: parseInt(process.env.DB_PORT),
      username: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_DATABASE,
      entities: [PersonEntity, UserEntity],
      synchronize: true,
    }),
    PersonModule
  ],
  controllers: [AppController],
  providers: [AppService],
  exports: [
    TypeOrmModule
  ]
})
export class AppModule { }
