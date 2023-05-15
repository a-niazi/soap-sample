import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProviderClientModule } from './provider-client/provider-client.module';

@Module({
  imports: [ProviderClientModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
