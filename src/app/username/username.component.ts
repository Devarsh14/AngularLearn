import { Component, OnInit } from '@angular/core';
import { template } from '@angular/core/src/render3';

@Component({
  selector: 'app-username',
  templateUrl: './username.component.html',
  styleUrls: ['./username.component.scss'],
  template : '{{firstName}}'
})

export class UsernameComponent  {

  
   firstName: string;
  constructor() { 
    let no ;
    no = 7
    no = "Dea"
    let nu : number ;
    this.firstName = "Devarsh";
    devarsh();
  }

}

function devarsh (){
  console.log("Devarsh is shukla scion")
}