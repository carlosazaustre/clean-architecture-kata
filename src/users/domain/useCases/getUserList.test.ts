import { GetUserList } from "./getUserList";
import { vi } from "vitest";

describe("GetUserList", () => {
  let getUserList: GetUserList;
  let userRepositoryMock: any;

  beforeEach(() => {
    userRepositoryMock = {
      getUsers: vi.fn(),
    };
    getUserList = new GetUserList(userRepositoryMock);
  });

  it("should return a list of users", () => {
    const mockUsers = [
      { id: "1", name: "John Doe" },
      { id: "2", name: "Jane Doe" },
    ];
    userRepositoryMock.getUsers.mockReturnValueOnce(mockUsers);

    const users = getUserList.execute();

    expect(users).toEqual(mockUsers);
    expect(userRepositoryMock.getUsers).toHaveBeenCalled();
  });
});
