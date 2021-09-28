import { CreateCustomerType } from './createCustomer.type';

export class CustomerEntity {
    private _id: string;
    private _name: string;
    private _email: string;
    private phone: string;
    private birthDate: string;
    private rg: string;
    private cpf: string;
    
    constructor(payload: CreateCustomerType) {
        
    }

    get id () {
        return this._id;
    }

    get name () {
        return this._name;
    }

    get email () {
        return this._email;
    }
}