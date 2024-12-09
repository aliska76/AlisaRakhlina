import { Injectable } from '@nestjs/common';
import { PrismaService } from './prisma.service'
import { Property, Prisma } from '@prisma/client';

@Injectable()
export class PropertiesServer {
    constructor(private prisma: PrismaService) {}

    async property(
        propertyWhereUniqueInput: Prisma.PropertyWhereUniqueInput,
      ): Promise<Property | null> {
        return this.prisma.property.findUnique({
          where: propertyWhereUniqueInput,
        });
      }
    
      async properties(params: {
        skip?: number;
        take?: number;
        cursor?: Prisma.PropertyWhereUniqueInput;
        where?: Prisma.PropertyWhereInput;
        orderBy?: Prisma.PropertyOrderByWithRelationInput;
      }): Promise<Property[]> {
        const { skip, take, cursor, where, orderBy } = params;
        return this.prisma.property.findMany({
          skip,
          take,
          cursor,
          where,
          orderBy,
        });
      }

      async createProperty(data: Prisma.PropertyCreateInput): Promise<Property> {
        return this.prisma.property.create({
          data,
        });
      }

      async updateUser(params: {
        where: Prisma.PropertyWhereUniqueInput;
        data: Prisma.PropertyUpdateInput;
      }): Promise<Property> {
        const { where, data } = params;
        return this.prisma.property.update({
          data,
          where,
        });
      }

      async deleteUser(where: Prisma.PropertyWhereUniqueInput): Promise<Property> {
        return this.prisma.property.delete({
          where,
        });
      }
}