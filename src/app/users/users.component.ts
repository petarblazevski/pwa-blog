import { Component, OnInit } from '@angular/core';

import { User } from '../models/user';
import { Store, select } from '@ngrx/store';
import { ActionAddUser, ActionAddMoreUser } from '../store/users.actions';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {
  users$: Observable<User[]>;
  users: User[] = [];

  constructor(private store: Store<{ users: User[] }>) {
    this.users$ = store.pipe(select('users'));
  }

  ngOnInit() {}

  addUser() {
    this.store.dispatch(new ActionAddUser(new User()));
  }

  addMultipleUsers(max: number) {
    const users: User[] = [];

    for (let i = 0; i < max; i++) {
      this.users.push(new User());
    }

    // this.store.dispatch(new ActionAddMoreUser(users));
  }
}
