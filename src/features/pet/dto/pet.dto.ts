import { ApiProperty } from '@nestjs/swagger';
import { AutoMap } from '@automapper/classes';

export class BreedDto {
  @ApiProperty()
  @AutoMap()
  name: string;
  @ApiProperty()
  @AutoMap()
  description?: string;
}

export class ColorDto {
  @ApiProperty()
  @AutoMap()
  general: string;
  @ApiProperty()
  @AutoMap()
  body?: string;
  @ApiProperty()
  @AutoMap()
  face?: string;
  @ApiProperty()
  @AutoMap()
  tail?: string;
  @ApiProperty()
  @AutoMap()
  legs?: string;
}

export class PetDto {
  @ApiProperty()
  @AutoMap()
  id: string;
  @ApiProperty()
  @AutoMap()
  name: string;
  @ApiProperty()
  @AutoMap()
  description?: string;
  @ApiProperty()
  @AutoMap()
  breed: BreedDto;
  @ApiProperty()
  @AutoMap()
  color?: ColorDto;
}
