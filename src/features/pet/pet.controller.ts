import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { PetService } from './pet.service';
import { PetDto } from './dto/pet.dto';
import { ApiBody, ApiOperation, ApiResponse } from '@nestjs/swagger';

@Controller('pets')
export class PetController {
  constructor(private readonly petService: PetService) {}

  @Get()
  @ApiOperation({ summary: 'Get all pets' })
  async getPets(): Promise<PetDto[]> {
    return await this.petService.getPets();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Get pet by id' })
  async getPetsById(@Param('id') id: string): Promise<PetDto> {
    return this.petService.getPetById(id);
  }

  @Post()
  @ApiOperation({ summary: 'Create a new pet' })
  @ApiBody({ type: PetDto })
  @ApiResponse({
    status: 201,
    description: 'The pet has been successfully created.',
  })
  @ApiResponse({ status: 400, description: 'Invalid input.' })
  async createPet(@Body() petDto: PetDto): Promise<PetDto> {
    return petDto;
  }
}
