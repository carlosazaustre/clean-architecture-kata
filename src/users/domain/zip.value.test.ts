import { Zip } from "./zip.value";

describe("Zip Value Object", () => {
  it("should create a valid Zip object", () => {
    const zip = new Zip("28001");
    expect(zip.value).toBe("28001");
  });

  it("should throw an error if zip is empty", () => {
    expect(() => new Zip("")).toThrow("Zip cannot be empty");
  });

  it("should throw an error if zip is not exactly 5 characters long", () => {
    expect(() => new Zip("1234")).toThrow(
      "Zip must be exactly 5 characters long"
    );
  });

  it("should return true for equal Zip objects", () => {
    const zip1 = new Zip("28001");
    const zip2 = new Zip("28001");
    expect(zip1.equals(zip2)).toBe(true);
  });

  it("should return false for different Zip objects", () => {
    const zip1 = new Zip("28001");
    const zip2 = new Zip("28002");
    expect(zip1.equals(zip2)).toBe(false);
  });
});
