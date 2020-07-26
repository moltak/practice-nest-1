import { Body, Controller, Get, Post } from '@nestjs/common';
import { AppService } from './app.service';
import { Problems } from './dto/problem';
import { Results } from './dto/result';
import { Input, Inputs } from './dto/input';

@Controller('/api')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('/fetchProblem')
  fetchProblem(): Promise<Problems> {
    return this.appService.problems();
  }

  @Post('/submit')
  submit(@Body() input: Inputs): Promise<Results> {
    return this.appService.results(JSON.parse(input.input));
  }
}
