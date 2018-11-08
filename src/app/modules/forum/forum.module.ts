import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../../shared/shared.module';
import { ForumRoutingModule } from './forum-routing.module';
import { MarkdownModule } from 'ngx-markdown';
import { DisqusModule } from 'ngx-disqus';
import { CovalentTextEditorModule } from '@covalent/text-editor';

import { ForumComponent } from './forum.component';
import { ShowComponent } from './show/show.component';
import { AddComponent } from './add/add.component';
import { EditComponent } from './edit/edit.component';

@NgModule({
  declarations: [
    ForumComponent,
    ShowComponent,
    AddComponent,
    EditComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    ForumRoutingModule,
    MarkdownModule.forChild(),
    DisqusModule.forRoot('ngdisqusapp'),
    CovalentTextEditorModule
  ]
})
export class ForumModule { }
