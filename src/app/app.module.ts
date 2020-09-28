import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AllUserComponent } from './components/all-user/all-user.component';
import { UserComponent } from './components/user/user.component';
import { AllPostsComponent } from './components/all-posts/all-posts.component';
import {HttpClientModule} from '@angular/common/http';
import {RouterModule, Routes} from '@angular/router';
import { PostComponent } from './components/post/post.component';
import { PostOfUserComponent } from './components/post-of-user/post-of-user.component';
import { UserOfPostComponent } from './components/user-of-post/user-of-post.component';

const routes: Routes = [
  {path: 'all_users', component: AllUserComponent, children: [
      {path: 'post-of-user/:id', component: PostOfUserComponent}
    ]},
  {path: 'all_posts', component: AllPostsComponent, children : [
      {path: 'user-of-post/:id', component: UserOfPostComponent}
    ]}
];

@NgModule({
  declarations: [
    AppComponent,
    AllUserComponent,
    UserComponent,
    AllPostsComponent,
    PostComponent,
    PostOfUserComponent,
    UserOfPostComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
