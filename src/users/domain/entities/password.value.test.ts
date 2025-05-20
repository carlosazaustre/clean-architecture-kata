import { Password } from "./password.value";

describe("Password Value Object", () => {
  it("should create a valid password", () => {
    const password = new Password("Password123");
    expect(password.value).toBe("Password123");
  });

  it("should throw an error for invalid password format", () => {
    expect(() => new Password("short")).toThrow(
      "Password must be at least 8 characters long and contain at least one letter and one number"
    );
  });

  it("should be equal for the same password", () => {
    const password1 = new Password("SamePassword123");
    const password2 = new Password("SamePassword123");
    expect(password1.equals(password2)).toBe(true);
  });

  it("should not be equal for different passwords", () => {
    const password1 = new Password("Password1");
    const password2 = new Password("Password2");
    expect(password1.equals(password2)).toBe(false);
  });
});
