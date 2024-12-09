import { Module } from '@nestjs/common';
import { AddressesController } from './addressees.controller'
import { AddressesService } from './addresses.service';
import { PropertiesModule } from '../properties/properties.model';
import { PropertiesService } from '../properties/properties.service';

import { PrismaService } from '../prisma.service'

@Module({
    imports: [PropertiesModule],
    controllers: [AddressesController],
    providers: [PrismaService, AddressesService, PropertiesService],
  })
  
  export class AddressModel {}