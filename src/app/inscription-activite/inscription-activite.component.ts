import { Component, Input, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-inscription-activite',
  templateUrl: './inscription-activite.component.html',
  styleUrls: ['./inscription-activite.component.css']
})


export class InscriptionActiviteComponent implements OnInit {

  constructor() { }

nom = new FormControl("");
prenom = new FormControl("");
lieu = new FormControl("");

paiementButton: boolean = false;

goToPayment(){
  this.paiementButton = !this.paiementButton;
  console.log(this.nom.value, this.prenom.value, this.lieu.value);
}
  ngOnInit(): void {
  }

}
