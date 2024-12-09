import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PropertiesModule } from './properties.model'

@Module({
  imports: [PropertiesModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
