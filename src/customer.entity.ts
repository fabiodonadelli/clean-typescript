import { v4 } from 'uuid';
import { CreateCustomerType } from './createCustomer.type';

export class CustomerEntity {
  private _id: string;
  private _name: string;
  private _email: string;
  private _phone: string;
  private _birthDate: Date;
  private _rg: string;
  private _cpf: string;

  constructor(payload: CreateCustomerType) {
    this._id = payload.id || v4();
    this._name = payload.name;
    this._email = payload.email;
    this._phone = payload.phone;
    this._birthDate = payload.birthDate;
    this._rg = payload.rg;
    this._cpf = this.validateCpf(payload.cpf);
  }

  get id() {
    return this._id;
  }

  get name() {
    return this._name;
  }

  get email() {
    return this._email;
  }

  private validateCpf(cpf: string) {
    const regex = /^([0-9]{3}\.?[0-9]{3}\.?[0-9]{3}\-?[0-9]{2}|[0-9]{2}\.?[0-9]{3}\.?[0-9]{3}\/?[0-9]{4}\-?[0-9]{2})$/;

    if(!regex.test(String(cpf).toLowerCase())) throw new Error('CPF Incorreto')
    
    return cpf;
  }
}
