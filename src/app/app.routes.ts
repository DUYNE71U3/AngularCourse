import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { DetailcourseComponent } from './components/detailcourse/detailcourse.component';
import { PostsComponent } from './components/posts/posts.component';
import { PostDetailComponent } from './components/post-detail/post-detail.component';
import { UsersComponent } from './components/users/users.component';

export const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'course/:id', component: DetailcourseComponent},
  {path: 'posts', component: PostsComponent},
  {path: 'post/:id', component: PostDetailComponent},
  {path: 'users', component: UsersComponent},
];
