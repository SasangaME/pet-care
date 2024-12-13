import { Body, Controller, Get, Param, Post, Put } from '@nestjs/common';
import { PetService } from '../services/pet.service';
import { PetDto } from '../dto/pet.dto';
import { ApiBody, ApiOperation, ApiResponse } from '@nestjs/swagger';

@Controller('pets')
export class PetController {
  constructor(private readonly petService: PetService) {}

  @Get()
  @ApiOperation({ summary: 'Get all pets' })
  async getAll(): Promise<PetDto[]> {
    return await this.petService.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Get pet by id' })
  async getPetsById(@Param('id') id: string): Promise<PetDto> {
    return this.petService.findById(id);
  }

  @Post()
  @ApiOperation({ summary: 'Create a new pet' })
  @ApiBody({ type: PetDto })
  @ApiResponse({
    status: 201,
    description: 'The pet has been successfully created.',
  })
  @ApiResponse({ status: 400, description: 'Invalid input.' })
  async createPet(@Body() pet: PetDto): Promise<PetDto> {
    return await this.petService.create(pet);
  }

  @Put(':id')
  @ApiOperation({ summary: 'Update pet by id' })
  @ApiBody({ type: PetDto })
  @ApiResponse({
    status: 200,
    description: 'The pet has been successfully updated.',
  })
  @ApiResponse({ status: 400, description: 'Invalid input.' })
  async updatePet(@Param('id') id: string, @Body() pet: PetDto) {
    return await this.petService.update(id, pet);
  }
}
