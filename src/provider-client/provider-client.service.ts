import { Inject, Injectable } from '@nestjs/common';
import { Client } from 'nestjs-soap';

@Injectable()
export class ProviderService {
  constructor(@Inject('MY_SOAP_CLIENT') private readonly mySoapClient: Client) {}

  async reserveDirectCharge() {
    return await this.mySoapClient.Approve();
  }

  async approveDirectCharge() {
    return await this.mySoapClient.Approve();
  }
}