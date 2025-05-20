import { Email } from "./email.value";
import { Password } from "./password.value";

export class User {
  private readonly id: string;
  private readonly username: string;
  private readonly email: Email;
  private readonly password: Password;

  constructor(id: string, username: string, email: string, password: string) {
    this.validateUser(username, email, password);
    this.id = id;
    this.username = username;
    this.email = new Email(email);
    this.password = new Password(password);
  }

  private validateUser(
    username: string,
    email: string,
    password: string
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

  public equals(other: User): boolean {
    return this.id === other.getId();
  }
}
