import { User } from "./user";

export class Job {
  id: number;
  company: string;
  title: string;
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber: string;
  description: string;
  technologies: string;
  user: User;

  constructor(
    id: number = 0,
    company: string = '',
    title: string = '',
    firstName: string = '',
    lastName: string = '',
    email: string = '',
    phoneNumber: string = '',
    description: string = '',
    technologies: string = '',
    user: User = new User()
  ){
    this.id = id;
    this.company = company;
    this.title = title;
    this.firstName = firstName;
    this.lastName = lastName;
    this.email = email;
    this.phoneNumber = phoneNumber;
    this.description = description;
    this.technologies = technologies;
    this.user = user;
  }
}
