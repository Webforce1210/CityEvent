import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { users } from '../models/users.model';


@Component({
  selector: 'app-compte',
  templateUrl: './compte.component.html',
  styleUrls: ['./compte.component.css']
})

export class CompteComponent implements OnInit {
  name='John Doe';
  localisation='Creil';
  imgprofil='/assets/img/PhotoProfil.jpg';

  
  user:users|null=null;
  
  constructor(private router:Router, private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(param=>{
    this.user = 
    })
  }

}