import { Email } from "../domain/entities/email.value";
import { User } from "../domain/entities/User.entity";
import { InMemoryUserRepository } from "./inMemoryUserRepository";

const defaultUser = {
  id: "1",
  username: "John Doe",
  email: "test@email.com",
  password: "password123",
  address: "123 Main St",
  zip: "10001",
  city: "New York",
};

describe("InMemoryUserRepository", () => {
  let userRepository: InMemoryUserRepository;

  beforeEach(() => {
    userRepository = new InMemoryUserRepository();
  });

  it("should add a user", () => {
    const user = new User(defaultUser);

    const addedUser = userRepository.addUser(user);

    expect(addedUser).toEqual(user);
    expect(userRepository.getUsers()).toContain(user);
  });

  it("should return all users", () => {
    const user1 = new User({ ...defaultUser, id: "1" });
    const user2 = new User({
      ...defaultUser,
      id: "2",
      email: "test2@email.com",
    });
    userRepository.addUser(user1);
    userRepository.addUser(user2);

    const users = userRepository.getUsers();

    expect(users).toEqual([user1, user2]);
    expect(users.length).toBe(2);
  });

  it("should find a user by email", () => {
    const user = new User(defaultUser);
    const userEmail = new Email(defaultUser.email);

    userRepository.addUser(user);

    const foundUser = userRepository.findByEmail(userEmail);
    expect(foundUser).toEqual(user);
  });

  it("should return null if user not found by email", () => {
    const user = new User(defaultUser);
    const nonExistinguserEmail = new Email("test2@email.com");

    userRepository.addUser(user);

    const foundUser = userRepository.findByEmail(nonExistinguserEmail);
    expect(foundUser).toBeNull();
  });
});
