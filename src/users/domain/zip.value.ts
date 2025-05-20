export class Zip {
  private readonly zip: string;

  constructor(zip: string) {
    this.validateZip(zip);
    this.zip = zip;
  }

  private validateZip(zip: string): void {
    if (!zip) {
      throw new Error("Zip cannot be empty");
    }
    if (zip.length !== 5) {
      throw new Error("Zip must be exactly 5 characters long");
    }
  }

  public get value(): string {
    return this.zip;
  }

  public equals(other: Zip): boolean {
    return this.zip === other.value;
  }
}