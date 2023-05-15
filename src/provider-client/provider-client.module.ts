import { Module } from '@nestjs/common';
import { SoapModule, SoapModuleOptions } from 'nestjs-soap';
import { ConfigService, ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    SoapModule.forRootAsync(
      { 
        clientName: 'MY_SOAP_CLIENT',
        imports: [ConfigModule],
        inject: [ConfigService],
        useFactory: async (
          configService: ConfigService,
        ): Promise<SoapModuleOptions> => (
            {
            uri: "",
            clientName: 'MY_SOAP_CLIENT',
            auth: {
                type: 'basic',
                username: "",
                password: "",
            },
        }),        
      }
    ),
  ],
})
export class ProviderClientModule {}