import type { User } from "../domain/entities/User.entity";
import { AddNewUser } from "../domain/useCases/addNewUser";
import { GetUserList } from "../domain/useCases/getUserList";

export interface View {
  showUsers(users: User[]): void;
  requestUsername(): Promise<string>;
  requestPassword(): Promise<string>;
  requestEmail(): Promise<string>;
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

    this.addNewUser.execute({ username, password, email });
    this.loadUsersList();
  }
}
