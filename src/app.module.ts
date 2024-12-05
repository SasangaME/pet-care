import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PetModule } from './features/pet/pet.module';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: 'env/.env',
    }),
    PetModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
