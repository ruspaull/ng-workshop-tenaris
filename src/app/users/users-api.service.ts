import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { faker } from '@faker-js/faker';
import { Observable, of } from 'rxjs';
import { User } from './user.model';

@Injectable({
  providedIn: 'root',
})
export class UsersApiService {
  constructor(private http: HttpClient) {}

  getUsers(): Observable<User[]> {
    const users = Array.from({ length: 100 }).map(() => ({
      id: faker.string.uuid(),
      firstName: faker.person.firstName(),
      lastName: faker.person.lastName(),
      age: faker.number.int({ min: 18, max: 30 }),
      email: faker.internet.email(),
      company: faker.company.name(),
    }));
    return of(users);
  }

  getUsersPromise(): Promise<User[]> {
    const users = Array.from({ length: 100 }).map(() => ({
      id: faker.string.uuid(),
      firstName: faker.person.firstName(),
      lastName: faker.person.lastName(),
      age: faker.number.int({ min: 18, max: 30 }),
      email: faker.internet.email(),
      company: faker.company.name(),
    }));
    return new Promise((resolve) => {
      setTimeout(
        () => {
          resolve(users);
        },
        faker.number.int({ min: 500, max: 3000 })
      );
    });
  }
}
