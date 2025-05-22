import type { User } from "../domain/entities/User.entity";
import { AddNewUser } from "../domain/useCases/addNewUser";
import { GetUserList } from "../domain/useCases/getUserList";

export interface View {
  showUsers(users: User[]): void;
  requestUsername(): Promise<string>;
  requestPassword(): Promise<string>;
  requestEmail(): Promise<string>;
  requestAddress(): Promise<string>;
  requestZip(): Promise<string>;
  requestCity(): Promise<string>;
  showError(message: string): void;
}

export class Presenter {
  constructor(
    private view: View,
    private addNewUser: AddNewUser,
    private getUserList: GetUserList
  ) {}

  public async loadUsersList() {
    const result = this.getUserList.execute();
    this.view.showUsers(result);
  }

  public async onAddInput() {
    const username = await this.view.requestUsername();
    const password = await this.view.requestPassword();
    const email = await this.view.requestEmail();
    const address = await this.view.requestAddress();
    const zip = await this.view.requestZip();
    const city = await this.view.requestCity();

    try {
      await this.addNewUser.execute({
        username,
        password,
        email,
        address,
        zip,
        city,
      });
    } catch (error: unknown) {
      let errorMessage = "Unknown error";
      if (error && typeof error === "object" && "message" in error) {
        errorMessage = (error as { message: string }).message;
      }
      this.view.showError(errorMessage);
    }
    this.loadUsersList();
  }
}
