import { User } from "../../model/User";
import { IUsersRepository } from "../../repositories/IUsersRepository";

interface IRequest {
  user_id: string;
}

class ListAllUsersUseCase {
  constructor(private usersRepository: IUsersRepository) {}

  execute({ user_id }: IRequest): User[] {
    const users = this.usersRepository.list();
    const list = users.filter(u => u.id === user_id);
    if (!list) {
      throw new Error("User not found");
    }
    const user = list[0];
    if (user.admin === false){
      throw new Error("User not is admin");
    }

    return users;
  }
}

export { ListAllUsersUseCase };
