import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PropertiesModule } from './properties/properties.model'
import { AddressModel } from './address/addresses.model'

@Module({
  imports: [PropertiesModule, AddressModel],
  controllers: [AppController],
  providers: [AppService],
})

export class AppModule {}
