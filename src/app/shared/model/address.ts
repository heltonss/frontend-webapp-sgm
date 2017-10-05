export class Address {
    public street: string;
    public number: string;
    public district: string;
    public city: string;
    public cep: string;
    public state: string;

    constructor(street: string, number: string, district: string, city: string, cep: string, state: string) {
        this.street = street;
        this.number = number;
        this.district = district;
        this.city = city;
        this.cep = cep;
        this.state = state;
    }
}
