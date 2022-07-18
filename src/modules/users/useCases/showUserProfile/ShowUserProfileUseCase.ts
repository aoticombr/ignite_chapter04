import { User } from "../../model/User";
import { IUsersRepository } from "../../repositories/IUsersRepository";

interface IRequest {
  user_id: string;
}

class ShowUserProfileUseCase {
  constructor(private usersRepository: IUsersRepository) {}

  execute({ user_id }: IRequest): User { 
    const users = this.usersRepository.list();
    if (!users){
      throw new Error("List users empty!");      
    }
    const user = users.filter(f => f.id === user_id);
    if (!user) {
      throw new Error("User Not Found");      
    }
    return user[0];
    
  }
}

export { ShowUserProfileUseCase };
