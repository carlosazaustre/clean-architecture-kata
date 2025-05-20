import type { UserRepository } from "../UserRepository";

export class GetUserList {
  constructor(private userRepository: UserRepository) {}

  execute() {
    const users = this.userRepository.getUsers();
    return users;
  }
}
