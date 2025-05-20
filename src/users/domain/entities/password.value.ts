export class Password {
  private readonly password: string;

  constructor(password: string) {
    this.validatePassword(password);
    this.password = password;
  }

  private validatePassword(password: string): void {
    const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
    if (!passwordRegex.test(password)) {
      throw new Error(
        "Password must be at least 8 characters long and contain at least one letter and one number"
      );
    }
  }

  public get value(): string {
    return this.password;
  }

  public equals(other: Password): boolean {
    return this.password === other.value;
  }
}
