import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  public novoTodo = '';

  public lista = [
];

  constructor(
    public navCtrl: NavController
  ) {

  }


  public addTodo(){
    if(this.novoTodo){
      this.lista.push({
        nome: this.novoTodo, checked: false
      });
      this.novoTodo = '';
    }
  }

}
