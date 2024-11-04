import { User } from '../models/User';

export interface UserRepository {
  getUserById(id: number): Promise<User>;
}
