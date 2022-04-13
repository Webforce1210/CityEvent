import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-inscription-activite',
  templateUrl: './inscription-activite.component.html',
  styleUrls: ['./inscription-activite.component.css']
})


export class InscriptionActiviteComponent implements OnInit {

  constructor() { }

  inscriptionForm = new FormGroup({
    nom : new FormControl("", Validators.required),
    prenom : new FormControl("", Validators.required),
    lieu : new FormControl("", Validators.required)
  })

  nom = new FormControl("", Validators.required);
  prenom = new FormControl("", Validators.required);
  lieu = new FormControl("", Validators.required);

paiementButton: boolean = false;

get name(){
  return this.inscriptionForm.get('nom');
}

get firstname(){
  return this.inscriptionForm.get('prenom');
}

get location(){
  return this.inscriptionForm.get('lieu');
}

goToPayment(){
  this.paiementButton = !this.paiementButton;
  console.log(this.inscriptionForm.value);
}

  ngOnInit(): void {
  }

}
