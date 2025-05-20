export class Email {
  private readonly email: string;

  constructor(email: string) {
    this.validateEmail(email);
    this.email = email;
  }

  private validateEmail(email: string): void {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      throw new Error("Invalid email format");
    }
  }

  public get value(): string {
    return this.email;
  }

  public equals(other: Email): boolean {
    return this.email === other.value;
  }
}
