import { User } from "./User.entity";

describe("User Entity", () => {
  it("should create a valid user", () => {
    const user = new User(
      "1",
      "username",
      "username@mail.com",
      "password8",
      "street",
      "28001",
      "city"
    );
    expect(user.getId()).toBe("1");
  });

  it("should throw an error if username is empty", () => {
    expect(
      () =>
        new User(
          "1",
          "",
          "username@mail.com",
          "password8",
          "street",
          "28001",
          "city"
        )
    ).toThrow("Username cannot be empty");
  });

  it("should throw an error if emails is empty", () => {
    expect(
      () =>
        new User("1", "username", "", "password8", "street", "28001", "city")
    ).toThrow("Email cannot be empty");
  });

  it("should throw an error if password is empty", () => {
    expect(
      () =>
        new User(
          "1",
          "username",
          "username@mail.com",
          "",
          "street",
          "28001",
          "city"
        )
    ).toThrow("Password cannot be empty");
  });

  it("should throw an error if street is empty", () => {
    expect(
      () =>
        new User(
          "1",
          "username",
          "username@email.com",
          "password8",
          "",
          "28001",
          "city"
        )
    ).toThrow("Address cannot be empty");
  });

  it("should throw an error if zip is empty", () => {
    expect(
      () =>
        new User(
          "1",
          "username",
          "username@email.com",
          "password8",
          "street",
          "",
          "city"
        )
    ).toThrow("Zip cannot be empty");
  });

  it("should throw an error if city is empty", () => {
    expect(
      () =>
        new User(
          "1",
          "username",
          "username@email.com",
          "password8",
          "street",
          "28001",
          ""
        )
    ).toThrow("City cannot be empty");
  });

  it("should be equal for the same id", () => {
    const user1 = new User(
      "1",
      "username",
      "username@mail.com",
      "password8",
      "street",
      "28001",
      "city"
    );
    const user2 = new User(
      "1",
      "username2",
      "username2@mail.com",
      "password9",
      "street2",
      "28002",
      "city2"
    );
    expect(user1.equals(user2)).toBe(true);
  });
});
