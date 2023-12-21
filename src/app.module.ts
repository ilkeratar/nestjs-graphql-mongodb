import { Module } from '@nestjs/common';
import {GraphQLModule} from "@nestjs/graphql";
import { LessonModule } from './lesson/lesson.module';
import {ApolloDriver, ApolloDriverConfig} from "@nestjs/apollo";
import {TypeOrmModule} from "@nestjs/typeorm";
import {Lesson} from "./lesson/entities/lesson.entity";
@Module({
  imports: [
      TypeOrmModule.forRoot({
          type:'mongodb',
          url:'mongodb+srv://ilkerrxr:denemeauth1@cluster0.57stc9n.mongodb.net/',
          synchronize:true,
          useUnifiedTopology:true,
          entities:[
              Lesson
          ]
      }),
      GraphQLModule.forRoot<ApolloDriverConfig>({
        autoSchemaFile:true,
          driver:ApolloDriver,
      }),
      LessonModule
  ],
})
export class AppModule {}
