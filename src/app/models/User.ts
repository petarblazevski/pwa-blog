import * as Faker from 'faker';

export class User {
  firstName: string;
  lastName: string;
  city: string;
  zipCode: string;
  country: string;
  state: string;

  constructor() {
    this.firstName = Faker.name.firstName();
    this.lastName = Faker.name.lastName();
    this.city = Faker.address.city();
    this.country = Faker.address.country();
    this.state = Faker.address.state();
    this.zipCode = Faker.address.zipCode();
  }
}
