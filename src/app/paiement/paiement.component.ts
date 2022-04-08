import { Component, Input, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { EventActivity } from '../models/EventActivity.model';
let uniqid = require('uniqid');
import { NOMEM } from 'dns';

@Component({
  selector: 'app-paiement',
  templateUrl: './paiement.component.html',
  styleUrls: ['./paiement.component.css']
})


export class PaiementComponent implements OnInit {

  nomPrenom = new FormControl("");
  numeroDeCarte = new FormControl("");
  dateDexpiration = new FormControl("");
  cvc = new FormControl("");

  @Input() nom: string = "";
  @Input() prenom: string = "";
  @Input() lieu: string = "";


  constructor() { }

  ngOnInit(): void {
  }

}
