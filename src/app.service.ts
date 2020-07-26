import { Injectable } from '@nestjs/common';
import { Problem, Problems } from './payload/problem';
import { Result, Results } from './payload/result';
import { Inputs } from './payload/input';

@Injectable()
export class AppService {
  problems(): Promise<Problems> {
    const problems: Problem[] = [
      {
        id: 1,
        problem_text: '135 + 267 = ?',
        type: 1,
        choices: '[382,392,402,412,422]',
        answer: '3',
      },
    ];

    return Promise.resolve({ problems });
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
