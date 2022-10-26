export interface ICreateUserDTO {
  id?: string;
  name: string;
  surname: string;
  email: string;
  phone: string;
  password: string;
  confpass?: string;
}