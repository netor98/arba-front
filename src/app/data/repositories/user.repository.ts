import { Injectable } from '@angular/core';
import { UserRepository } from '../../domain/interfaces/user-repository.interface';
import { User } from '../../domain/models/User';
import { UserApiGateway } from '../gateways/user-api.gateway';
import { UserAdapter } from '../adapters/user.adapter';

@Injectable({
  providedIn: 'root'
})
export class UserRepositoryImpl implements UserRepository {
  constructor(private userApiGateway: UserApiGateway) {}

  async getUserById(id: number): Promise<User> {
    const data = await this.userApiGateway.getUserById(id);
    return UserAdapter.toModel(data);
  }
}
