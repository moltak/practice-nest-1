import { Body, Controller, Get, Post } from '@nestjs/common';
import { AppService } from './app.service';
import { Problems } from './payload/problem';
import { Results } from './payload/result';
import { Inputs } from './payload/input';

@Controller('/api')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('/fetchProblem')
  fetchProblem(): Promise<Problems> {
    return this.appService.problems();
  }

  @Post('/submit')
  submit(@Body('input') inputs: Inputs): Promise<Results> {
    return this.appService.results(inputs);
  }
}
