import { Controller, Get, Post } from '@nestjs/common';
import { AppService } from './app.service';
import { Problem, Problems } from './payload/problem';
import { Result, Results } from './payload/result';

@Controller('/api')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('/fetchProblem')
  fetchProblem(): Problems {
    const problems: Problem[] = [
      {
        id: 1,
        problem_text: '135 + 267 = ?',
        type: 1,
        choices: '[382,392,402,412,422]',
        answer: '3',
      },
    ];

    return { problems };
  }

  @Post('/submit')
  submit(): Results {
    const results: Result[] = [
      {
        id: 1,
        answer: '2',
        result: false,
      },
    ];

    return { results };
  }
}
