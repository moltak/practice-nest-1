import { Injectable } from '@nestjs/common';
import { Problem, Problems } from './payload/problem';
import { Result, Results } from './payload/result';
import { Inputs } from './payload/input';
import { ProblemEntity } from './entity/problem.entity';
import { Repository } from 'typeorm';
import { ResultEntity } from './entity/result.entity';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class AppService {
  constructor(
    @InjectRepository(ProblemEntity)
    private readonly problemRepository: Repository<ProblemEntity>,
    @InjectRepository(ResultEntity)
    private readonly resultRepository: Repository<ResultEntity>,
  ) {}

  problems(): Promise<Problems> {
    return this.problemRepository.find({}).then(problems => {
      return { problems };
    });
  }

  results(inputs: Inputs): Promise<Results> {
    const results: Result[] = [
      {
        id: 1,
        answer: '2',
        result: false,
      },
    ];

    return Promise.resolve({ results });
  }
}
