import { AddNewUser } from "./users/domain/useCases/addNewUser";
import { GetUserList } from "./users/domain/useCases/getUserList";
import { InMemoryUserRepository } from "./users/data/inMemoryUserRepository";
import { Presenter, type View } from "./users/presentation/Presenter";

export function getUsersPresenter(view: View) {
  const userRepository = new InMemoryUserRepository();
  const addNewUser = new AddNewUser(userRepository);
  const getUserList = new GetUserList(userRepository);

  return new Presenter(view, addNewUser, getUserList);
}
