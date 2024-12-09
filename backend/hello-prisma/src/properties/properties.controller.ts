import { Controller, Get, Param } from '@nestjs/common';
import { PropertiesService } from './properties.service';
import { Property as PropertyModel } from '@prisma/client';

@Controller('properties')
export class PropertiesController {
  constructor(private readonly propertyService: PropertiesService) {}

  @Get()
  getProperty(): Promise<PropertyModel[]> {
    return this.propertyService.properties({});
  }

  @Get(':id')
  getPropertyById(@Param('id') id: Number ): Promise<PropertyModel> {
    return this.propertyService.property({ id: Number(id) })
  }
}
