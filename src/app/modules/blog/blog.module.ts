import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BlogRoutingModule } from './blog-routing.module';
import { MarkdownModule } from 'ngx-markdown';
import { DisqusModule } from 'ngx-disqus';
import { CovalentTextEditorModule } from '@covalent/text-editor';
import { MomentModule } from 'ngx-moment';

import { BlogComponent } from './blog.component';
import { AddComponent } from './add/add.component';
import { EditComponent } from './edit/edit.component';
import { ShowComponent } from './show/show.component';
import { SharedModule } from '../../shared/shared.module';

@NgModule({
  declarations: [
    BlogComponent,
    AddComponent,
    EditComponent,
    ShowComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    BlogRoutingModule,
    MarkdownModule.forChild(),
    DisqusModule.forRoot('ngdisqusapp'),
    CovalentTextEditorModule,
    MomentModule
  ]
})
export class BlogModule { }
