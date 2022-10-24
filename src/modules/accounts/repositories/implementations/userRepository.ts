import { ICreateUserDTO } from '../../dtos/iCreateUserDTO';
import { User } from '../../enteties/user';
import { IUsersRepository } from '../iUsersRepository';
export class UsersRepository implements IUsersRepository {
  private static INSTANCE: UsersRepository;

  private users: User[];

  private constructor() {
    this.users = [];
  }

  public static getInstance(): UsersRepository {
    if (!UsersRepository.INSTANCE) {
      UsersRepository.INSTANCE = new UsersRepository();
    }

    return UsersRepository.INSTANCE;
  }
 
  async create({ name, email, phone, password }: ICreateUserDTO): Promise<void> {
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

  async findByEmail(email: string): Promise<any> {
    const user = this.users.find((user) => user.email === email);
    user;
  }

  findById(id: string): void {
    const user = this.users.find((user) => user.id === id);
    user;
  }

  list(): User[] {
    throw new Error('Method not implemented.');
  }

  updateOne(data: User): User {
    throw new Error('Method not implemented.');
  }
};