import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProblemEntity } from './entity/problem.entity';
import { ResultEntity } from './entity/result.entity';

@Module({
  imports: [
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '..', 'public'),
      renderPath: '/',
    }),
    TypeOrmModule.forRoot(),
    TypeOrmModule.forFeature([ProblemEntity, ResultEntity]),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
