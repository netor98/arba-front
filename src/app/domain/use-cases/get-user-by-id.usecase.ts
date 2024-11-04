import { UserRepository } from '../interfaces/user-repository.interface';
import { User } from '../models/User';

export class GetUserByIdUseCase {
  constructor(private userRepository: UserRepository) {}

  async execute(id: number): Promise<User> {
    return this.userRepository.getUserById(id);
  }
}
