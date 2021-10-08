import { CreateCustomerUsecase } from './createCostumer.usecase';

describe('CreateCustomerUsecase', () => {
  it('deve criar um cliente', () => {
    const user = {
      name: expect.any('string'),
      email: 'email@email.com',
      cpf: '41544758289',
      telefone: '19987801972',
      data_nascimento: new Date(),
    };

    const usecase = new CreateCustomerUsecase();
    const userCreated = usecase.save(user);

    expect(userCreated).toHaveProperty('id');
    expect(userCreated).toBeInstanceOf(CreateCustomerUsecase);
  });
});
