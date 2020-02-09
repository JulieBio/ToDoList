import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgxWebstorageModule } from 'ngx-webstorage';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { AutofocusModule } from 'angular-autofocus-fix';
import { NgxTrimDirectiveModule } from 'ngx-trim-directive';
import { InlineEditorModule } from '@qontu/ngx-inline-editor';

import { AppComponent } from './app.component';
import { TodoService } from './todo.service';
import { ConnectComponent } from './component/connect/connect.component';
import { TodolistComponent } from './component/todolist/todolist.component';


@NgModule({
  declarations: [
    AppComponent,
    ConnectComponent,
    TodolistComponent
  ],
  imports: [
    BrowserModule,
    NgxWebstorageModule.forRoot(),
    AppRoutingModule,
    FormsModule,
    FontAwesomeModule,
    HttpClientModule,
    ReactiveFormsModule,
    AutofocusModule,
    NgxTrimDirectiveModule,
    InlineEditorModule
  ],
  providers: [TodoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
