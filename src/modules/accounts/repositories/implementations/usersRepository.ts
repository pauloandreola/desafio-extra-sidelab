import { ICreateUserDTO } from '../../dtos/iCreateUserDTO';
import { User } from '../../enteties/user';
import { IUsersRepository } from '../iUsersRepository';

export class UsersRepository implements IUsersRepository {
  private users: User[];

  private static INSTANCE: UsersRepository;

  private constructor() {
    this.users = [];
  }

  public static getInstance(): UsersRepository {
    if (!UsersRepository.INSTANCE) {
      UsersRepository.INSTANCE = new UsersRepository();
    }

    return UsersRepository.INSTANCE;
  }
 
  create({ name, email, phone, password }: ICreateUserDTO): void {
    const user = new User();
    
    Object.assign(user, { name, email, phone, password });
    this.users.push(user);
  }

  deleteByEmail(email: string): User {
    throw new Error('Method not implemented.');
  }

  deleteById(id: string): User {
    throw new Error('Method not implemented.');
  }

  findByEmail(email: string): User {
    const user = this.users.find((user) => user.email === email);
    return user as any;
  }

  findById(id: string): void {
    const user = this.users.find((user) => user.id === id);
    user;
  }

  list(): User[] {
    return this.users;
  }

  updateOne(data: User): User {
    throw new Error('Method not implemented.');
  }
};