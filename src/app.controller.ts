import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { AppModel } from './app.model';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): AppModel {
    return this.appService.getHello();
  }
}
