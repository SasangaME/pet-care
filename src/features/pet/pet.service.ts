import { Injectable } from '@nestjs/common';
import { PetDto } from './dto/pet.dto';

@Injectable()
export class PetService {
  async getPets(): Promise<PetDto[]> {
    return this.getPetList();
  }

  private getPetList(): PetDto[] {
    return [{ id: '1', name: 'Ollie' }];
  }
}
