import { Zip } from "./zip.value";

export class Address {
  private readonly street: string;
  private readonly city: string;
  private readonly zip: Zip;

  constructor(street: string, zip: string, city: string) {
    this.street = street;
    this.zip = new Zip(zip);
    this.city = city;
  }

  public getStreet(): string {
    return this.street;
  }

  public getCity(): string {
    return this.city;
  }

  public getZip(): string {
    return this.zip.value;
  }

  public iquals(other: Address): boolean {
    return (
      this.street === other.getStreet() &&
      this.city === other.getCity() &&
      this.zip.equals(other.zip)
    );
  }
}
