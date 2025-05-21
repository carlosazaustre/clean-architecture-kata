import { User } from "./User.entity";

const defaultUser = {
  username: "username",
  email: "username@mail.com",
  password: "password8",
  address: "street",
  zip: "28001",
  city: "city",
};

describe("User Entity", () => {
  it("should create a valid user", () => {
    const user = new User({ ...defaultUser, id: "1" });
    expect(user.getId()).toBe("1");
  });

  it("should create a user with a random id if no id is provided", () => {
    const user = new User({
      username: "username",
      email: "username@mail.com",
      password: "password8",
      address: "street",
      zip: "28001",
      city: "city",
    });
    expect(user.getId()).toMatch(
      /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/
    );
  });

  it("should throw an error if username is empty", () => {
    expect(
      () =>
        new User({
          ...defaultUser,
          username: "",
        })
    ).toThrow("Username cannot be empty");
  });

  it("should throw an error if emails is empty", () => {
    expect(
      () =>
        new User({
          ...defaultUser,
          email: "",
        })
    ).toThrow("Email cannot be empty");
  });

  it("should throw an error if password is empty", () => {
    expect(
      () =>
        new User({
          ...defaultUser,
          password: "",
        })
    ).toThrow("Password cannot be empty");
  });

  it("should throw an error if street is empty", () => {
    expect(
      () =>
        new User({
          ...defaultUser,
          address: "",
        })
    ).toThrow("Address cannot be empty");
  });

  it("should throw an error if zip is empty", () => {
    expect(
      () =>
        new User({
          ...defaultUser,
          zip: "",
        })
    ).toThrow("Zip cannot be empty");
  });

  it("should throw an error if city is empty", () => {
    expect(
      () =>
        new User({
          ...defaultUser,
          city: "",
        })
    ).toThrow("City cannot be empty");
  });

  it("should be equal for the same id", () => {
    const user1 = new User({
      ...defaultUser,
      id: "1",
    });
    const user2 = new User({
      ...defaultUser,
      id: "1",
      username: "username2",
    });
    expect(user1.equals(user2)).toBe(true);
  });
});
