import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ErrorHandler } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { XHRBackend, HttpModule } from '@angular/http';

import { SharedModule } from './shared/shared.module';
import { HomeModule } from './modules/home/home.module';
import { MarkdownModule } from 'ngx-markdown';
import { DisqusModule } from 'ngx-disqus';
import { CovalentTextEditorModule } from '@covalent/text-editor';

import { ErrorHandlerService } from './shared/services/error-handler.service';

import { AppComponent } from './app.component';
import { PostService } from './shared/services/post.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    HttpModule,
    SharedModule,
    HomeModule,
    MarkdownModule.forRoot(),
    DisqusModule.forRoot('ngdisqusapp'),
    CovalentTextEditorModule
  ],
  providers: [
    PostService,
    {
        provide: ErrorHandler,
        useClass: ErrorHandlerService
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
