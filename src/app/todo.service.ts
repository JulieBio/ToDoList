import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Router, ActivatedRoute } from '@angular/router';
import { Observable, of } from 'rxjs';
import { tap, catchError } from 'rxjs/operators';
import { IList } from './iList';


@Injectable({
  providedIn: 'root'
})
export class TodoService {

  loginI: string = "";
  passwordI: string = "";
  loginC: string = "";
  passwordC: string = "";
  todoTitle: string = "";

  listes: IList;

  list : IList;
  items: IList;

  errorMessage = '';
  isConnect = false;
 
  public listUrl = "http://92.222.69.104:80/todo/listes";

  constructor(private http: HttpClient,private router: Router) { }


  // ---------------------  inscription  --------------------- 
  getInscription(loginI, passwordI) {
    this.errorMessage = 'Vous n\'avez pas pu vous inscrire !';
    let url = "http://92.222.69.104:80/todo/create/"+loginI+"/"+passwordI;
    this.http.get(url) 
    .subscribe(     
      (response) => {console.log(response); 
            alert("Bienvenue, veuillez maintenant vous connecter !")
            return this.listes;},
      (error) => {alert(this.errorMessage); 
      }
    );
  }

  // ---------------------  connexion  --------------------- 
  getConnexion(loginC, passwordC){
    this.errorMessage = 'Vous n\'avez pas pu vous connecter !';
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':'application/json',
        login : loginC,
        password : passwordC
      })
    };
    this.http.get<IList>(this.listUrl, httpOptions) 
    .subscribe(data => {this.listes = data;
                      this.router.navigate(['/listes']);
                      console.log(this.listes);
                    },
      (error) => {alert(this.errorMessage);}
    );
  }

// ---------------------  recupération des listes  --------------------- 

getListes() {
  console.log(this.listes);
  return this.listes;
}

// ------------------------------------------ LISTS ------------------------------------------
  // ajouter une liste
  addListTitle(todoTitle) {
    this.listes.todoListes.push({ name : todoTitle, elements : [] });
    this.http.post<IList>(this.listUrl, this.listes)
    .subscribe(data => {console.log(data)});
  }

  // supprimer une liste
  getDeleteList(i): void {
    this.listes.todoListes.splice(i,1);
    this.http.post(this.listUrl, this.listes)
    .subscribe(data => {console.log(data)});
  }

  // modifier le nom d'une liste
  getEditList(nameliste : IList, i : number): void {
    this.http.post(this.listUrl, this.listes)
    .subscribe(data => {console.log(data)});
  }

 
   // ------------------------------------------ ITEMS ------------------------------------------
  // ajouter un item
   getAddItem(itemTitle : string, i : number) {
    this.listes.todoListes[i].elements.push(itemTitle);
    this.http.post<IList>(this.listUrl, this.listes)
    .subscribe(data => {console.log(data)});
  }

  // supprimer un item
  getDeleteItem(i : number, j : number): void {
    this.listes.todoListes[i].elements.splice(j,1);
    this.http.post<IList>(this.listUrl, this.listes)
    .subscribe(data => {console.log(data)});
  }

  // modifier le nom d'une tâche
  getEditItem(item : string, i : number, j : number): void {
    this.listes.todoListes[i].elements.splice(j,1,item);
    this.http.post(this.listUrl, this.listes)
    .subscribe(data => {console.log(data)});
  }

}
