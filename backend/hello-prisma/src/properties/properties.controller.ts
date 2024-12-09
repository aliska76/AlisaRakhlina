import { Controller, Get, Param, Delete, Post, Body } from '@nestjs/common';
import { PropertiesService } from './properties.service';
import { Property as PropertyModel } from '@prisma/client';

@Controller('properties')
export class PropertiesController {
  constructor(private readonly propertyService: PropertiesService) {}

  @Get()
  async getProperty(): Promise<PropertyModel[]> {
    return this.propertyService.properties({});
  }

  @Get(':id')
  async getPropertyById(@Param('id') id: Number ): Promise<PropertyModel> {
    return this.propertyService.property({ id: Number(id) })
  }
  
  @Delete(':id')
  async deleteProperty(@Param('id') id: Number): Promise<PropertyModel> {
    return this.propertyService.deleteProperty({ id: Number(id) })
  }

  @Post()
  async creteProperty(@Body() propertsData: { 
    title: string; 
    number_of_rooms: number;
     price: number; 
     floor: number; 
     contact: string }): Promise<PropertyModel> {
    const { title, number_of_rooms, price, floor, contact } = propertsData;
    console.log(propertsData);
    return this.propertyService.createProperty({ title, number_of_rooms, price, floor, contact })
  }
}
