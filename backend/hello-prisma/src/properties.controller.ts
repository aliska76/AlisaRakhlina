import { Controller, Get, Param } from '@nestjs/common';
import { PropertiesServer } from './properties.server';
import { Property as PropertyModel } from '@prisma/client';

@Controller('properties')
export class PropertiesController {
  constructor(private readonly propertyServer: PropertiesServer) {}

  @Get()
  getProperty(): Promise<PropertyModel[]> {
    return this.propertyServer.properties({});
  }

  @Get(':id')
  getPropertyById(@Param('id') id: Number ): Promise<PropertyModel> {
    return this.propertyServer.property({ id: Number(id) })
  }
}
