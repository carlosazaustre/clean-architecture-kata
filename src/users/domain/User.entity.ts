import { Email } from "./email.value";
import { Password } from "./password.value";
import { Zip } from "./zip.value";

export class User {
  private readonly id: string;
  private readonly username: string;
  private readonly email: Email;
  private readonly password: Password;
  private readonly address: string;
  private readonly zip: Zip;
  private readonly city: string;

  constructor(
    id: string,
    username: string,
    email: string,
    password: string,
    address: string,
    zip: string,
    city: string
  ) {
    this.validateUser(username, address, city);
    this.email = new Email(email);
    this.password = new Password(password);
    this.zip = new Zip(zip);
    this.username = username;
    this.address = address;
    this.city = city;
    this.id = id || crypto.randomUUID();
  }

  private validateUser(username: string, address: string, city: string): void {
    if (!username) {
      throw new Error("Username cannot be empty");
    }
    if (!address) {
      throw new Error("Address cannot be empty");
    }
    if (!city) {
      throw new Error("City cannot be empty");
    }
  }

  public getId(): string {
    return this.id;
  }

  public equals(other: User): boolean {
    return this.id === other.getId();
  }
}
