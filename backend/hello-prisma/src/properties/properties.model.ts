import { Module } from '@nestjs/common';
import { PropertiesController } from './properties.controller'
import { PropertiesServer } from './properties.server';
import { PrismaService } from '../prisma.service'

@Module({
    imports: [],
    controllers: [PropertiesController],
    providers: [PrismaService, PropertiesServer],
  })
  
  export class PropertiesModule {}