import { Inject, Injectable } from '@nestjs/common';
import { Client } from 'nestjs-soap';

@Injectable()
export class ExampleService {
  constructor(@Inject('MY_SOAP_CLIENT') private readonly mySoapClient: Client) {}

  async approveDirectCharge() {
    return await this.mySoapClient.Approve();
  }
}