import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  public novoTodo = '';
  public editandoIndex = -1;

  public lista = [
];

  constructor(
    public navCtrl: NavController
  ) {

  }


  public addTodo(){
    if(this.novoTodo){
      if(this.editandoIndex === -1){
        this.lista.push({
          nome: this.novoTodo, checked: false
        });
      }
      else{
        this.lista[this.editandoIndex].nome = this.novoTodo;
      }
      this.novoTodo = '';
    }
  }

  public excluir(idx: number){
    this.lista.splice(idx, 1);
  }

  public editar(idx: any){
    this.editandoIndex = idx;
  }

}
