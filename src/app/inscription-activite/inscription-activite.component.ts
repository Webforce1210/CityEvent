import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-inscription-activite',
  templateUrl: './inscription-activite.component.html',
  styleUrls: ['./inscription-activite.component.css']
})
export class InscriptionActiviteComponent implements OnInit {

  constructor() { }

paiement: boolean = false;

goToPayment(){
  this.paiement = !this.paiement;
}
  ngOnInit(): void {
  }

}
