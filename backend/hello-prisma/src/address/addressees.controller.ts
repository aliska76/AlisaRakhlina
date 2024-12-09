import { Controller, Get, Param, Post, Body, Delete, Put } from '@nestjs/common';
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
  async createAddress( @Body()
  addressData: {
    state: string;
    city: string;
    street: string;
    number?: number;
    properties?: {
      id: number
      title: string;
      number_of_rooms: number;
      price: number;
      floor?: number;
      contact: string;
    }[]
  }): Promise<AddressModel> {
    const { state, city, street, number } = addressData;
    
    return this.addressService.createAddress({ state, city, street, number })
  }

  @Put(':id')
  async publishPost(@Param('id') id: Number, 
  @Body() updateData: { state?: string; city?: string; street?: string; number?: number }
): Promise<AddressModel> {
    return this.addressService.updateAddress({
      where: { id: Number(id) },
      data: updateData,
    });
  }

  //Invoke-WebRequest -Uri "http://localhost:3000/address/3" -Method DELETE
  @Delete(':id')
  async deleteAddress(@Param('id') id: Number): Promise<AddressModel> {
    return this.addressService.deleteAddress({ id: Number(id) })
  }
}
