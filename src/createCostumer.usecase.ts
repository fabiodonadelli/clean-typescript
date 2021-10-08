export class CreateCustomerUsecase {
  save(data: any) {
    data.id = 'foi';
    return data;
  }
}
