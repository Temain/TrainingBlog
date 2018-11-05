import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: 'forum',
    loadChildren: './forum/forum.module#ForumModule'
  },
  {
    path: 'blog',
    loadChildren: './blog/blog.module#BlogModule'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }