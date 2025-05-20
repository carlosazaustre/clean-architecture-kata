import type { Email } from "../domain/entities/email.value";
import type { User } from "../domain/entities/User.entity";
import type { UserRepository } from "../domain/UserRepository";

export class InMemoryUserRepository implements UserRepository {
  private users: User[] = [];

  addUser(user: User): User {
    this.users.push(user);
    return user;
  }

  getUsers(): User[] {
    return this.users;
  }

  findByEmail(email: Email): User | null {
    const user = this.users.find((user) => user.getEmail() === email.value);
    return user || null;
  }
}
