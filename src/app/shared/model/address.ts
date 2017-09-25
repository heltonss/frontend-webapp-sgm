export class Address {
    private street: string;
    private number: string;
    private district: string;
    private city: string;
    private cep: string;
    private state: string;

    constructor(street: string, number: string, district: string, city: string, cep: string, state: string) {
        this.street = street;
        this.number = number;
        this.district = district;
        this.city = city;
        this.cep = cep;
        this.state = state;
    }
}
