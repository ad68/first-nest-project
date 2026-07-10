import { Module } from '@nestjs/common';
import { UsersModule } from './users/users.module';
import { TypeOrmModule } from '@nestjs/typeorm'
@Module({
  imports: [
    /* TypeOrmModule.forRoot({
      type: "mysql",
      host: "localhost",
      port: 3306,
      username: "root",
      password: "Ad68@2309412",
      database: "user_manage",
      autoLoadEntities: true,
      synchronize: true,
    }), */
    TypeOrmModule.forRoot({
      type: "postgres",
      host: "localhost",
      port: 5432,
      username: "postgres",
      password: "Ad68@2309412",
      database: "user_manage",
      autoLoadEntities: true,
      synchronize: true,
    }),
    UsersModule],
})
export class AppModule { }
