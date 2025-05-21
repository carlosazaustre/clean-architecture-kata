import { AddNewUser } from "./addNewUser";
import { vi } from "vitest";

describe("AddNewUserCase", () => {
  let addNewUser: AddNewUser;
  let userRepositoryMock: any;

  beforeEach(() => {
    userRepositoryMock = {
      findByEmail: vi.fn(),
      addUser: vi.fn(),
    };
    addNewUser = new AddNewUser(userRepositoryMock);
  });

  it("should throw an error if user already exists", async () => {
    const userData = {
      username: "John Doe",
      email: "test@email.com",
      password: "password123",
      address: "123 Main St",
      city: "New York",
      zip: "10001",
    };
    userRepositoryMock.findByEmail.mockReturnValueOnce({
      email: userData.email,
    });
    await expect(addNewUser.execute(userData)).rejects.toThrow(
      "User already exists"
    );
  });

  it("should add a new user if it does not exist", async () => {
    const userData = {
      username: "John Doe",
      email: "test@gmail.com",
      password: "password123",
      address: "123 Main St",
      city: "New York",
      zip: "10001",
    };
    userRepositoryMock.findByEmail.mockReturnValueOnce(null);
    userRepositoryMock.addUser.mockReturnValueOnce({
      id: "1",
      ...userData,
    });
    const newUser = await addNewUser.execute(userData);
    expect(newUser).toEqual({
      id: "1",
      ...userData,
    });
    expect(userRepositoryMock.addUser).toHaveBeenCalled();
    expect(userRepositoryMock.findByEmail).toHaveBeenCalled();
  });
});
