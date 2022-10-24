import { uuid } from 'uuidv4';

export class User {

  id?: string;
  name: string;
  email: string;
  phone: string;
  password: string;

  constructor() {
    if (!this.id) {
      this.id = uuid();
    }
  }
}