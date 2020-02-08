import { Component, OnInit } from '@angular/core';
import { TodoService } from 'src/app/todo.service';
import { IList } from '../../iList';

@Component({
  selector: 'app-connect',
  templateUrl: './connect.component.html',
  styleUrls: ['./connect.component.css']
})
export class ConnectComponent implements OnInit {

  loginI: string = "";
  passwordI: string = "";
  loginC: string = "";
  passwordC: string = "";

  list : IList[] = [];

  constructor(private todoService : TodoService) { }

  inscription(){
    console.log("loginI, passwordI : " + this.loginI + this.passwordI);
    this.todoService.getInscription(this.loginI, this.passwordI);
    this.loginI = '';
    this.passwordI = '';
  }

  connexion(){
    console.log("loginC, passwordC : " + this.loginC + this.passwordC);
    this.todoService.getConnexion(this.loginC, this.passwordC);
  }

  ngOnInit() {
    
    
  }

}
