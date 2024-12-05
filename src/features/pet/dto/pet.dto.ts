import { ApiProperty } from '@nestjs/swagger';

export class PetDto {
  @ApiProperty()
  id: string;
  @ApiProperty()
  name: string;
  description?: string;
  color?: Color;
}

class Color {
  general: string;
  body?: string;
  face?: string;
  tail?: string;
  legs?: string;
}
