import { Email } from "./email.value";
import { Password } from "./password.value";
import { Zip } from "./zip.value";

export interface UserProps {
  id?: string;
  username: string;
  email: string;
  password: string;
  address: string;
  zip: string;
  city: string;
}

export class User {
  private readonly id: string;
  public readonly username: string;
  public readonly email: Email;
  private readonly password: Password;
  private readonly address: string;
  private readonly zip: Zip;
  private readonly city: string;

  constructor({
    id,
    username,
    email,
    password,
    address,
    zip,
    city,
  }: UserProps) {
    this.validateUser(username, address, city);
    this.id = id || crypto.randomUUID();
    this.username = username;
    this.email = new Email(email);
    this.password = new Password(password);
    this.zip = new Zip(zip);
    this.address = address;
    this.city = city;
  }

  private validateUser(username: string, address: string, city: string): void {
    if (!username) {
      throw new Error("Username cannot be empty");
    }
    // if (!address) {
    //   throw new Error("Address cannot be empty");
    // }
    // if (!city) {
    //   throw new Error("City cannot be empty");
    // }
  }

  public getId(): string {
    return this.id;
  }

  public equals(other: User): boolean {
    return this.id === other.getId();
  }
}
