import { User } from "../../model/User";
import { IUsersRepository } from "../../repositories/IUsersRepository";
import { validate } from "uuid";

interface IRequest {
  user_id: string;
}

class ShowUserProfileUseCase {
  constructor(private usersRepository: IUsersRepository) {}

  execute({ user_id }: IRequest): User { 
    const admin = this.usersRepository.findById(user_id);
    if (!admin) {
      throw new Error("Not Found"); 
    }
    //const users = this.usersRepository.list();
    //const user = users.filter(f => f.id === user_id);
    //if (!user) {
    //  throw new Error("User Not Found");      
    //}
    return admin;
    
  }
}

export { ShowUserProfileUseCase };
