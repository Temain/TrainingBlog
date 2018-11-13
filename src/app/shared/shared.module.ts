import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { HeaderComponent } from './components/layout/header/header.component';
import { FooterComponent } from './components/layout/footer/footer.component';
import { NavbarComponent } from './components/layout/navbar/navbar.component';
import { LatestPostsComponent } from './components/latest-posts/latest-posts.component';
import { CategoriesComponent } from './components/categories/categories.component';
import { TagsComponent } from './components/tags/tags.component';

import { JoinPipe } from './pipes/join.pipe';

@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    NavbarComponent,
    LatestPostsComponent,
    CategoriesComponent,
    TagsComponent,
    JoinPipe,
    LatestPostsComponent,
    CategoriesComponent,
    TagsComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    NavbarComponent,
    LatestPostsComponent,
    CategoriesComponent,
    TagsComponent,
    JoinPipe
  ]
})
export class SharedModule { }
