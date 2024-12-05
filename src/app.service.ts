import { Injectable } from '@nestjs/common';
import { AppModel } from './app.model';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class AppService {
  constructor(private readonly configService: ConfigService) {}

  getHello(): AppModel {
    return {
      title: this.configService.get<string>('TITLE'),
      version: this.configService.get<string>('VERSION'),
      build: this.configService.get<string>('BUILD'),
      env: this.configService.get<string>('ENV'),
    };
  }
}
