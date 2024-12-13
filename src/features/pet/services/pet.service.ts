import { Injectable, NotFoundException } from '@nestjs/common';
import { Pet, PetDocument } from '../entities/pet.entity';
import { Model } from 'mongoose';
import { PetDto } from '../dto/pet.dto';
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

  async findById(id: string): Promise<PetDto> {
    const pet = await this.findPetById(id);
    return this.mapper.map(pet, Pet, PetDto);
  }

  private async findPetById(id: string): Promise<Pet> {
    const pet: Pet = await this.petModel.findById(id);
    if (!pet) {
      throw new NotFoundException(`pet with id ${id} not found`);
    }
    return pet;
  }

  async update(id: string, petDto: PetDto): Promise<PetDto> {
    const pet: Pet = await this.findPetById(id);
    pet.name = petDto.name;
    pet.description = petDto.description;
    pet.breed = petDto.breed;
    pet.color = petDto.color;
    const petDocument = new this.petModel(pet);
    await petDocument.save();
    return petDto;
  }
}
