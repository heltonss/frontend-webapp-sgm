class User {
  private name: string;
  private lastName: string;
  private cpf: string;
  private email: string;
  private phone: string;

  constructor(name: string, lastName: string, cpf: string, email: string, phone: string) {
    this.name = name;
    this.lastName = lastName;
    this.cpf = cpf;
    this.email = email;
    this.phone = phone;
  }
}
