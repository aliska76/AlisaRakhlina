import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma.service'
import { Address, Prisma } from '@prisma/client';

@Injectable()
export class AddressesService {
    constructor(private prisma: PrismaService) {}

    async address(
        addressWhereUniqueInput: Prisma.AddressWhereUniqueInput,
      ): Promise<Address | null> {
        return this.prisma.address.findUnique({
          where: addressWhereUniqueInput,
        });
      }
    
      async addresses(params: {
        skip?: number;
        take?: number;
        cursor?: Prisma.AddressWhereUniqueInput;
        where?: Prisma.AddressWhereInput;
        orderBy?: Prisma.AddressOrderByWithRelationInput;
      }): Promise<Address[]> {
        const { skip, take, cursor, where, orderBy } = params;
        return this.prisma.address.findMany({
          skip,
          take,
          cursor,
          where,
          orderBy,
        });
      }

      async createAddress(data: Prisma.AddressCreateInput & { properties?: Omit<Prisma.PropertyCreateInput, 'address'>[] }): Promise<Address> {
        const { properties, ...addressData } = data;

        return this.prisma.address.create({
          data: {
            ...addressData,
            properties: properties ? {
              create: data.properties.map((property) => ({
                title: property.title,
                number_of_rooms: property.number_of_rooms,
                price: property.price,
                floor: property.floor,
                contact: property.contact,
              })),
            }
          : undefined
          }
        });
      }

      async updateAddress(params: {
        where: Prisma.AddressWhereUniqueInput;
        data: Prisma.AddressUpdateInput;
      }): Promise<Address> {
        const { where, data } = params;
        return this.prisma.address.update({
          data,
          where
        });
      }

      async deleteAddress(where: Prisma.AddressWhereUniqueInput): Promise<Address> {
        return this.prisma.address.delete({
          where,
        });
      }
}