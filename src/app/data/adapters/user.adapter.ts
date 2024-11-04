import {User} from "../../domain/models/User";

export class UserAdapter {
  static toModel(data: any): User {
    return new User(
      data.id,
      data.name,
      data.email
    );
  }
}
