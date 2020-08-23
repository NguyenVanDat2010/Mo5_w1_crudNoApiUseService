import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StudentComponent } from './views/student/student.component';
import { UserComponent } from './views/user/user.component';
import { TodoComponent } from './views/todo/todo.component';

@NgModule({
  declarations: [
    AppComponent,
    StudentComponent,
    UserComponent,
    TodoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
