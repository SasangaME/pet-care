import { Controller, Get } from '@nestjs/common';
import { PetService } from './pet.service';
import { PetDto } from './dto/pet.dto';

@Controller('pets')
export class PetController {
  constructor(private readonly petService: PetService) {}

  @Get()
  async getPets(): Promise<PetDto[]> {
    return await this.petService.getPets();
  }
}
