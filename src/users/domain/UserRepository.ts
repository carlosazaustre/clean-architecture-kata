import type { Email } from "./entities/email.value";
import type { User } from "./entities/User.entity";

export interface UserRepository {
  getUsers(): User[];
  addUser(user: User): User;
  findByEmail(email: Email): User | null;
}
