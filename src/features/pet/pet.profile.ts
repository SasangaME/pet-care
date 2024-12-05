import { AutomapperProfile, InjectMapper } from '@automapper/nestjs';
import { createMap, Mapper } from '@automapper/core';
import { Pet } from './entities/pet.entity';
import { PetDto } from './dto/pet.dto';

export class PetProfile extends AutomapperProfile {
  constructor(@InjectMapper() mapper: Mapper) {
    super(mapper);
  }

  override get profile() {
    return (mapper) => {
      createMap(mapper, Pet, PetDto);
      createMap(mapper, PetDto, Pet);
    };
  }
}
