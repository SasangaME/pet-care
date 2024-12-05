import { Injectable } from '@nestjs/common';
import { Pet, PetDocument } from './entities/pet.entity';
import { Model } from 'mongoose';
import { PetDto } from './dto/pet.dto';
import { InjectModel } from '@nestjs/mongoose';
import { InjectMapper } from '@automapper/nestjs';
import { Mapper } from '@automapper/core';

@Injectable()
export class PetService {
  constructor(
    @InjectModel(Pet.name) private readonly petModel: Model<PetDocument>,
    @InjectMapper() private readonly mapper: Mapper,
  ) {}

  async findAll(): Promise<PetDto[]> {
    const pets = await this.petModel.find().exec();
    return this.mapper.mapArray(pets, Pet, PetDto);
  }

  async create(petDto: PetDto): Promise<PetDto> {
    const pet = this.mapper.map(petDto, PetDto, Pet);
    const createdPet = await this.petModel.create(pet);
    petDto.id = createdPet.id;
    return petDto;
  }
}
