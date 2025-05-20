import { User } from "./User.entity";

describe("User Entity", () => {
  it("should create a valid user", () => {
    const user = new User("1", "username", "username@mail.com", "password8");
    expect(user.getId()).toBe("1");
    expect(user.getUsername()).toBe("username");
    expect(user.getEmail()).toBe("username@mail.com");
    expect(user.getPassword()).toBe("password8");
  });

  it("should throw an error if username is empty", () => {
    expect(() => new User("1", "", "username@mail.com", "password8")).toThrow(
      "Username cannot be empty"
    );
  });

  it("should throw an error if emails is empty", () => {
    expect(() => new User("1", "username", "", "password8")).toThrow(
      "Email cannot be empty"
    );
  });

  it("should throw an error if password is empty", () => {
    expect(() => new User("1", "username", "username@mail.com", "")).toThrow(
      "Password cannot be empty"
    );
  });

  it("should be equal for the same id", () => {
    const user1 = new User("1", "username", "username@mail.com", "password8");
    const user2 = new User("1", "username2", "username2@mail.com", "password9");
    expect(user1.equals(user2)).toBe(true);
  });
});
