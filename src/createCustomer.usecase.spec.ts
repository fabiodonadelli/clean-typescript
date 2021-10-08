import { CreateCustomerType } from './createCustomer.type';
import { CreateCustomerUsecase } from './createCustumer.usecase';

describe('CreateCustomerUsecase', () => {
  it('deve criar um cliente', () => {
    const user: CreateCustomerType = {
      name: expect.any('string'),
      email: 'email@email.com',
      cpf: '41544758289',
      phone: '19987801972',
      birthDate: new Date(),
    };

    const usecase = new CreateCustomerUsecase();
    const userCreated = usecase.save(user);
    
    expect(userCreated).toHaveProperty('id');
    expect(userCreated.email).toBe(user.email);
  });
});
