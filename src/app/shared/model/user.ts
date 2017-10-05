export class User {
  public name: string;
  public lastName: string;
  public cpf: string;
  public email: string;
  public phone: string;
  public cellphone: string;

  constructor(name: string, lastName: string, cpf: string, email: string, phone: string, cellphone: string) {
    this.name = name;
    this.lastName = lastName;
    this.cpf = cpf;
    this.email = email;
    this.phone = phone;
    this.cellphone = cellphone;
  }
}
