import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { AutoMap } from '@automapper/classes';
import { BreedDto, ColorDto } from '../dto/pet.dto';

export type PetDocument = Pet & Document;

export class Breed {
  @Prop()
  @AutoMap()
  name: string;
  @Prop()
  @AutoMap()
  description?: string;
}

export class Color {
  @Prop()
  @AutoMap()
  general: string;
  @Prop()
  @AutoMap()
  body?: string;
  @Prop()
  @AutoMap()
  face?: string;
  @Prop()
  @AutoMap()
  tail?: string;
  @Prop()
  @AutoMap()
  legs?: string;
}

@Schema({
  toJSON: {
    virtuals: true,
    versionKey: false,
    transform: (doc, ret) => {
      ret.id = ret._id.toString();
      delete ret._id;
    },
  },
})
export class Pet {
  @AutoMap()
  id: string;
  @Prop()
  @AutoMap()
  name: string;
  @Prop()
  @AutoMap()
  description?: string;
  @Prop()
  @AutoMap(() => BreedDto)
  breed: Breed;
  @Prop()
  @AutoMap(() => ColorDto)
  color: Color;
}

export const PetSchema = SchemaFactory.createForClass(Pet);
