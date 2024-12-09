import { Module } from '@nestjs/common';
import { PropertiesController } from './properties.controller'
import { PropertiesService } from './properties.service';
import { PrismaService } from '../prisma.service'

@Module({
    imports: [],
    controllers: [PropertiesController],
    providers: [PrismaService, PropertiesService],
  })
  
  export class PropertiesModule {}