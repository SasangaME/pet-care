import { Injectable } from '@nestjs/common';
import { Pet, PetDocument } from './entities/pet.entity';
import { Model } from 'mongoose';
import { PetDto } from './dto/pet.dto';
import { InjectModel } from '@nestjs/mongoose';

@Injectable()
export class PetService {
  constructor(@InjectModel(Pet.name) private petModel: Model<PetDocument>) {}

  async findAll(): Promise<PetDto[]> {
    const pets = await this.petModel.find().exec();
    const response: PetDto[] = [];
    pets.forEach((pet) => {
      const petDto: PetDto = {
        id: pet.id,
        name: pet.name,
        description: pet.description,
        breed: {
          name: pet.breed.name,
          description: pet.breed.description,
        },
        color: {
          general: pet.color.general,
          body: pet.color.body,
          tail: pet.color.tail,
          legs: pet.color.legs,
          face: pet.color.face,
        },
      };
      response.push(petDto);
    });
    return response;
  }

  async create(petDto: PetDto): Promise<PetDto> {
    const pet: Pet = {
      name: petDto.name,
      description: petDto.description,
      breed: {
        name: petDto.breed.name,
        description: petDto.breed.description,
      },
      color: {
        general: petDto.color.general,
        face: petDto.color.face,
        body: petDto.color.body,
        legs: petDto.color.legs,
        tail: petDto.color.tail,
      },
    };
    const createdPet = await this.petModel.create(pet);
    petDto.id = createdPet.id;
    return petDto;
  }
}
