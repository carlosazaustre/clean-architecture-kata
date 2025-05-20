import { Email } from "./email.value";
import { Password } from "./password.value";
import { Address } from "./address.entity";
import { Zip } from "./zip.value";

export class User {
  private readonly id: string;
  private readonly username: string;
  private readonly email: Email;
  private readonly password: Password;
  private readonly address: Address;

  constructor(
    id: string,
    username: string,
    email: string,
    password: string,
    street: string,
    zip: string,
    city: string
  ) {
    this.validateUser(username, email, password, street, zip, city);
    this.id = id;
    this.username = username;
    this.email = new Email(email);
    this.password = new Password(password);
    this.address = new Address(street, new Zip(zip).value, city);
  }

  private validateUser(
    username: string,
    email: string,
    password: string,
    street: string,
    zip: string,
    city: string
  ): void {
    if (!username) {
      throw new Error("Username cannot be empty");
    }
    if (!email) {
      throw new Error("Email cannot be empty");
    }
    if (!password) {
      throw new Error("Password cannot be empty");
    }
    if (!street) {
      throw new Error("Street cannot be empty");
    }
    if (!zip) {
      throw new Error("Zip cannot be empty");
    }
    if (!city) {
      throw new Error("City cannot be empty");
    }
  }

  public getId(): string {
    return this.id;
  }

  public getUsername(): string {
    return this.username;
  }

  public getEmail(): string {
    return this.email.value;
  }

  public getPassword(): string {
    return this.password.value;
  }

  public getAddress(): Address {
    return this.address;
  }

  public equals(other: User): boolean {
    return this.id === other.getId();
  }
}
