import { CreateCustomerType } from './createCustomer.type';
import { CustomerEntity } from './customer.entity';

describe('CustomerEntity', () => {
  let customerMock: CreateCustomerType;

  beforeAll(() => {
    customerMock = {
      name: 'Jhon',
      email: 'jhon@email.com',
      phone: '19988099799',
      birthDate: new Date(),
      cpf: '12345678909',
    };    
  });

  it('should create a Customer instance', () => {
    let customer = new CustomerEntity(customerMock);
    expect(customer).toBeDefined();
  });

  it('deve retornar erro ao criar customer com cpf incorreto', () => {
    expect(() => new CustomerEntity({...customerMock, cpf: '123'})).toThrow('CPF Incorreto');
  })

});
