import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { TodoService } from 'src/app/todo.service';
import { IList } from '../../iList';


@Component({
  selector: 'todolist',
  templateUrl: './todolist.component.html',
  styleUrls: ['./todolist.component.css'],
})
export class TodolistComponent implements OnInit {

  @Input() elements:any;

  // Icones :
  faPlus = faPlus;
  faTrash = faTrash;

  todoTitle: string = '';
  itemTitle: string = '';

  firstTitleList: string;
  firstTitleItem: string;
  editingL: boolean = false;
  editingI: boolean = false;
  i: number;
  j: number;

  listes : IList;


  constructor(private todoService : TodoService) { }

  ngOnInit() { 
    this.firstTitleList = '';
    this.listes = this.todoService.getListes();
 }

  // ajouter une liste
  addList(todoTitle : string): void{
    this.todoService.addListTitle(todoTitle);
    this.todoTitle = '';
  }
  // ajouter une tâche
  addItem(itemTitle : string, i : number, j : number,): void {
    this.todoService.getAddItem(itemTitle,i);
    this.listes.todoListes[i].elements[j] = '';
  }
  // supprimer une liste
  deleteList(i : number) :void {
    this.todoService.getDeleteList(i);
  }
  // supprimer une tâche
  deleteItem(i : number, j : number): void {
    this.todoService.getDeleteItem(i,j);
  }

  // Liste titre : modifications du champ titre de la liste
  editList(nameliste: IList, i : number): void {
    this.todoService.getEditList(nameliste, i);
  }

  // Item titre :  modifications du champ du nom de la tâche
  editItem(item : string, i : number, j : number): void {
    this.todoService.getEditItem(item, i, j);
  }

}

