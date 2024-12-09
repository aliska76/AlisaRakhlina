import { Controller, Get, Param, Delete } from '@nestjs/common';
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
  async deleteAddress(@Param('id') id: Number): Promise<PropertyModel> {
    return this.propertyService.deleteProperty({ id: Number(id) })
  }
}
