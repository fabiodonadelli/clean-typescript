import { CustomerEntity } from "./customer.entity";
import { CreateCustomerType } from './createCustomer.type';

export class CreateCustomerUsecase {
  save(data: CreateCustomerType) {
    const customer = new CustomerEntity(data);
    return customer;
  }
}
