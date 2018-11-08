import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: 'forum',
    loadChildren: './modules/forum/forum.module#ForumModule'
  },
  {
    path: 'blog',
    loadChildren: './modules/blog/blog.module#BlogModule'
  },
  {
    path: '**',
    redirectTo: '/'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
