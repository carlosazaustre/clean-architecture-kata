import * as readline from "readline";
import { getUsersPresenter } from "../../ServiceLocator";
import type { View } from "./Presenter";
import type { User } from "../domain/entities/User.entity";

export class TerminalView implements View {
  private presenter = getUsersPresenter(this);

  constructor(private rl: readline.Interface) {}

  public async start() {
    this.presenter.loadUsersList();
  }

  public showUsers(users: User[]): void {
    console.log("Users:");
    users.forEach((user) => {
      console.log(
        `- ${user.username} (${user.email.value}) - ${user.address}, ${user.zip.value}, ${user.city}`
      );
    });
    console.log("Total users:", users.length);

    this.presenter.onAddInput();
  }

  public requestUsername(): Promise<string> {
    return new Promise((resolve) => {
      this.rl.question("Enter username: ", (username) => {
        resolve(username);
      });
    });
  }

  public requestPassword(): Promise<string> {
    return new Promise((resolve) => {
      this.rl.question("Enter password: ", (password) => {
        resolve(password);
      });
    });
  }

  public requestEmail(): Promise<string> {
    return new Promise((resolve) => {
      this.rl.question("Enter email: ", (email) => {
        resolve(email);
      });
    });
  }

  public requestAddress(): Promise<string> {
    return new Promise((resolve) => {
      this.rl.question("Enter address: ", (address) => {
        resolve(address);
      });
    });
  }

  public requestZip(): Promise<string> {
    return new Promise((resolve) => {
      this.rl.question("Enter zip: ", (zip) => {
        resolve(zip);
      });
    });
  }

  public requestCity(): Promise<string> {
    return new Promise((resolve) => {
      this.rl.question("Enter city: ", (city) => {
        resolve(city);
      });
    });
  }
}
