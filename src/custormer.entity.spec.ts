import { CreateCustomerType } from './createCustomer.type';
import { CustomerEntity } from './customer.entity';

describe('CustomerEntity', () => {
  let customer: CustomerEntity;
  const mockData: CreateCustomerType = {
    name: 'Jhon',
    email: 'jhon@email.com',
    phone: '19988099799',
    birthDate: '10/11/1985',
    cpf: '12345678909',
  };

  beforeEach(() => {
    customer = new CustomerEntity(mockData);
  });

  it('should create a Customer instance', () => {
    expect(customer).toBeDefined();
  });

  // it('should have required fields', () => {
  //     expect(customer.name).toBe("Jhon Doe");
  //     expect(customer.email).toBe("jhon.doe@mail.com");
  // });
});
