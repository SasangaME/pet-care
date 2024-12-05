import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type PetDocument = Pet & Document;

export class Breed {
  @Prop()
  name: string;
  @Prop()
  description?: string;
}

export class Color {
  @Prop()
  general: string;
  @Prop()
  body?: string;
  @Prop()
  face?: string;
  @Prop()
  tail?: string;
  @Prop()
  legs?: string;
}

@Schema()
export class Pet {
  @Prop()
  name: string;
  @Prop()
  description?: string;
  @Prop()
  breed: Breed;
  @Prop()
  color: Color;
}

export const PetSchema = SchemaFactory.createForClass(Pet);
