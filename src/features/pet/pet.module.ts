import { Module } from '@nestjs/common';
import { PetService } from './services/pet.service';
import { PetController } from './controllers/pet.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Pet, PetSchema } from './entities/pet.entity';
import { PetProfile } from './pet.profile';

@Module({
  imports: [MongooseModule.forFeature([{ name: Pet.name, schema: PetSchema }])],
  providers: [PetService, PetProfile],
  exports: [PetService],
  controllers: [PetController],
})
export class PetModule {}
