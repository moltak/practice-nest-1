import { Controller, Get, Post } from '@nestjs/common';
import { AppService } from './app.service';

@Controller('/api')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('/fetchProblem')
  fetchProblem(): string {
    return '';
  }

  @Post('/submit')
  submit(): string {
    return '';
  }
}
