import { Injectable, NotFoundException } from '@nestjs/common';
import { PetDto } from './dto/pet.dto';

@Injectable()
export class PetService {
  async getPets(): Promise<PetDto[]> {
    return this.getPetList();
  }

  async getPetById(id: string): Promise<PetDto> {
    const pet = this.getPetList().find((pet) => pet.id === id);
    if (!pet) {
      throw new NotFoundException(`pet not found for id: ${id}`);
    }
    return pet;
  }

  private getPetList(): PetDto[] {
    return [{ id: '1', name: 'Ollie' }];
  }
}
