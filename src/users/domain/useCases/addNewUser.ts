import { User, type UserProps } from "../entities/User.entity";
import type { UserRepository } from "../UserRepository";

export class AddNewUser {
  constructor(private userRepository: UserRepository) {}

  async execute(userData: UserProps) {
    const user = new User({
      username: userData.username,
      email: userData.email,
      password: userData.password,
      address: userData.address,
      zip: userData.zip,
      city: userData.city,
    });

    // Check if user already exists
    const existingUser = this.userRepository.findByEmail(user.email);
    if (existingUser) {
      throw new Error("User already exists");
    }

    // Add new user
    const newUser = this.userRepository.addUser(user);
    return newUser;
  }
}
