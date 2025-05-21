import { User } from "../entities/User.entity";
import type { UserRepository } from "../UserRepository";

export class AddNewUser {
  constructor(private userRepository: UserRepository) {}

  async execute(userData: any) {
    // Check if user already exists
    const existingUser = this.userRepository.findByEmail(userData.email);
    if (existingUser) {
      throw new Error("User already exists");
    }

    // Add new user
    const user = new User({
      username: userData.name,
      email: userData.email,
      password: userData.password,
      address: userData.address,
      zip: userData.zip,
      city: userData.city,
    });
    const newUser = this.userRepository.addUser(user);
    return newUser;
  }
}
