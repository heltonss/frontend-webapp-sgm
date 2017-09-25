export class Vehicle {
    private model: string;
    private manufacturer: string;
    private yearManufacturer: number;
    private km: number;
    private plate: string;

    constructor(model: string, manufacturer: string, yearManufacturer: number, km: number, plate: string) {
        this.model = model;
        this.manufacturer = manufacturer;
        this.yearManufacturer = yearManufacturer;
        this.km = km;
        this.plate = plate;
    }
}
