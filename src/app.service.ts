import { Injectable } from '@nestjs/common';
import { AppModel } from './app.model';

@Injectable()
export class AppService {
  getHello(): AppModel {
    return {
      title: 'Pet Care API',
      version: '1.0',
      build: '2024120501',
      env: 'dev',
    };
  }
}
