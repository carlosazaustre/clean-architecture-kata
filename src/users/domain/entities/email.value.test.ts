import { Email } from "./email.value";

describe("Email Value Object", () => {
  it("should create a valid email", () => {
    const email = new Email("hola@correo.com");
    expect(email.value).toBe("hola@correo.com");
  });

  it("should throw an error for invalid email format", () => {
    expect(() => new Email("invalid-email")).toThrow("Invalid email format");
  });

  it("should be equal for the same email", () => {
    const email1 = new Email("email@email.com");
    const email2 = new Email("email@email.com");
    expect(email1.equals(email2)).toBe(true);
  });

  it("should not be equal for different emails", () => {
    const email1 = new Email("email1@email.com");
    const email2 = new Email("email2@email.com");
    expect(email1.equals(email2)).toBe(false);
  });
});
