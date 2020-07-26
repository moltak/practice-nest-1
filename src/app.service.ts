import { Injectable } from '@nestjs/common';
import { Problem, Problems } from './dto/problem';
import { Result, Results } from './dto/result';
import { Input, Inputs } from './dto/input';
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
      return {
        problems: problems.map(i => {
          return {
            id: i.id,
            answer: i.answer,
            choices: i.choices,
            problem_text: i.problemText,
            type: i.type,
          };
        }),
      };
    });
  }

  async results(inputs: Input[]): Promise<Results> {
    const founds = await this.problemRepository.findByIds(
      inputs.map(i => i.id),
    );

    const results = founds.map(problem => {
      const input = inputs.find(input => input.id === problem.id);

      let result = input.answer === problem.answer;
      if (problem.type === 3) {
        result = true;
      }

      return {
        problemId: input.id,
        problemAnswer: problem.answer,
        answer: input.answer,
        result,
      };
    });

    await this.resultRepository.save(
      results.map(i => {
        return { problemId: i.problemId, answer: i.answer, result: i.result };
      }),
    );

    return {
      results: results.map(i => {
        return { id: i.problemId, result: i.result, answer: i.problemAnswer };
      }),
    };
  }
}
