import { Controller, Get, Param, Post, Body, Delete } from '@nestjs/common';
import { AddressesService } from './addresses.service';
import { Address as AddressModel } from '@prisma/client';
import { PropertiesService } from '../properties/properties.service';

@Controller('address')
export class AddressesController {
  constructor(
    private readonly addressService: AddressesService,
    private readonly propertyService: PropertiesService
  ) {}

  @Get()
  async getAddress(): Promise<AddressModel[]> {
    return this.addressService.addresses({});
  }

  @Get(':id')
  async getAddressById(@Param('id') id: Number ): Promise<AddressModel> {
    return this.addressService.address({ id: Number(id) })
  }

  @Post()
  async createAdress(@Body() addressData: { state: string; city: string; street: string; number: number }): Promise<AddressModel> {
    const { state, city, street, number } = addressData;
    console.log(addressData);
    return this.addressService.createAddress({ state, city, street, number })
  }

  @Delete(':id')
  async deleteAddress(@Param('id') id: Number): Promise<AddressModel> {
    return this.addressService.deleteAddress({ id: Number(id) })
  }
}
