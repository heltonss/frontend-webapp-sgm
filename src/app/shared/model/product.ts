export class Product {
    public name: string;
    public description: string;
    public quantity: number;
    public price: number;

    constructor(name: string, description: string, quantity: number, price: number) {
        this.name = name;
        this.description = description;
        this.quantity = quantity;
        this.price = price;
    }
}
