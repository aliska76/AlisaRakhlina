import { Controller, Get, Param } from '@nestjs/common';
import { AddressesServer } from './addresses.server';
import { Address as AddressModel } from '@prisma/client';

@Controller('address')
export class AddressesController {
  constructor(private readonly addressServer: AddressesServer) {}

  @Get()
  getAddress(): Promise<AddressModel[]> {
    return this.addressServer.addresses({});
  }

  @Get(':id')
  getAddressById(@Param('id') id: Number ): Promise<AddressModel> {
    return this.addressServer.address({ id: Number(id) })
  }
}
