class Address {
    private street: string;
    private number: string;
    private city: string;
    private cep: string;
    private state: string;

    constructor(street: string, number: string, city: string, cep: string, state: string) {
        this.street = street;
        this.number = number;
        this.city = city;
        this.cep = cep;
        this.state = state;
    }
}
