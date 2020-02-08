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
    console.log(this.listes);
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
  // supprimer un item
  deleteItem(i : number, j : number): void {
    this.todoService.getDeleteItem(i,j);
  }

  // Liste titre : modifications du champ (dblclick) / récupération de la valeur de name et transformation en string
  editList(nameliste: IList): void {
    this.editingL = true;
    let nameL = JSON.stringify(nameliste);
    this.firstTitleList = nameL;
  }

  // modifications du champ (blur)(keyup.enter)
  doneEditL(nameliste, i : number){
    this.editingL = false;
    console.log(this.firstTitleList);
    let nameL = JSON.stringify(nameliste);
    if(nameL.length === 0){
      nameL = this.firstTitleList;
      console.log(this.firstTitleList);
      console.log(this.listes.todoListes[i].name);
    }
    this.todoService.getEditList(this.listes, i)
  }


  // Item titre :  modifications du champ (dblclick) / récupération de la valeur de name et transformation en string
    editItem(item : IList): void {
      let nameI = JSON.stringify(item);
      this.firstTitleItem = nameI;
      this.editingI = true;
    }
  
    // modifications du champ
    doneEditI(item : IList, i : number, j : number): void {
      console.log(this.firstTitleItem);
      let nameI = JSON.stringify(item);
      if(nameI.length === 0){
        nameI = this.firstTitleItem;
        console.log(this.firstTitleItem);
        console.log(this.listes.todoListes[i].elements[j]);
      }
      this.editingI = false;
      this.todoService.getEditItem(this.listes, j)
    }
  
    
  


}

