import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { EventActivity } from '../models/EventActivity.model';
let uniqid = require('uniqid');
import { NOMEM } from 'dns';
import { CreditCardInfo } from '../models/CreditCardInfo.model';
import { ThisReceiver } from '@angular/compiler';

@Component({
  selector: 'app-paiement',
  templateUrl: './paiement.component.html',
  styleUrls: ['./paiement.component.css']
})


export class PaiementComponent implements OnInit {

  nomPrenom = new FormControl("", Validators.required);
  numeroDeCarte = new FormControl("", Validators.required);
  dateDexpiration = new FormControl("", Validators.required);
  cvc = new FormControl("", Validators.required);
  saveCardInfos = new FormControl(false);


  @Input() nom: string = "";
  @Input() prenom: string = "";
  @Input() lieu: string = "";


  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    
  }

  payer(){
    let creditCardInfos = {
      nomPrenom : this.nomPrenom.value,
      numeroDeCarte : this.numeroDeCarte.value,
      dateDexpiration : this.dateDexpiration.value,
      cvc : this.cvc.value
    }
    console.log(creditCardInfos);
    console.log(this.saveCardInfos);
    
  }

  checkCheckBoxValue(event : any){
    this.saveCardInfos = event.target.checked;
    console.log(this.saveCardInfos);
  }

  
}
