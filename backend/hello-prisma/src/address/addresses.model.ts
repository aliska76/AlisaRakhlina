import { Module } from '@nestjs/common';
import { AddressesController } from './addressees.controller'
import { AddressesServer } from './addresses.server';
import { PrismaService } from '../prisma.service'

@Module({
    imports: [],
    controllers: [AddressesController],
    providers: [PrismaService, AddressesServer],
  })
  
  export class AddressModel {}