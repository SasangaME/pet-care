import { ApiProperty } from '@nestjs/swagger';

export class Breed {
  @ApiProperty()
  name: string;
  @ApiProperty()
  description?: string;
}

export class Color {
  @ApiProperty()
  general: string;
  @ApiProperty()
  body?: string;
  @ApiProperty()
  face?: string;
  @ApiProperty()
  tail?: string;
  @ApiProperty()
  legs?: string;
}

export class PetDto {
  @ApiProperty()
  id: string;
  @ApiProperty()
  name: string;
  @ApiProperty()
  description?: string;
  @ApiProperty()
  breed: Breed;
  @ApiProperty()
  color?: Color;
}
