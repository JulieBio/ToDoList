import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ConnectComponent } from './component/connect/connect.component';
import { TodolistComponent } from './component/todolist/todolist.component';



const routes: Routes = [
  {
    path: '',
    component : ConnectComponent,
    data:{ title:'Connexion'}
  },
  {
    path: 'listes',
    component : TodolistComponent,
    data:{ title:'ToDoList'}
  }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
