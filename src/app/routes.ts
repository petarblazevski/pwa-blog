import { Route } from '@angular/router';
import { PostsComponent } from './posts/posts.component';
import { UsersComponent } from './users/users.component';

export const ROUTES: Route[] = [
  {
    path: '',
    pathMatch: 'full',
    component: PostsComponent
  },
  {
    path: 'users',
    component: UsersComponent
  }
];
