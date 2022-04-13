
import { Component, OnInit, Renderer2, ViewChild, QueryList, ElementRef } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { User } from '../models/User.model';
import { UserService } from '../user.service';
import { FormControl } from '@angular/forms';


@Component({
  selector: 'app-view-bandeau',
  templateUrl: './view-bandeau.component.html',
  styleUrls: ['./view-bandeau.component.css']
})
export class ViewBandeauComponent implements OnInit {

  constructor(private router:Router, private route:ActivatedRoute, private storage: UserService, private renderer: Renderer2) {  }

  
  
  user:User|null=null;
  
  nameValue = new FormControl ("");

  regionValue = new FormControl ("");
  
  useravat2:string | null  = null;
  

  ngOnInit(): void {
    this.storage.init();
    this.route.paramMap.subscribe(param=>{
    
    this.user = this.storage.findUserById(param.get('userid')) as User; //userid
    // console.log(this.user,'userssssssssssssssss');
    
    this.nameValue.setValue(this.user.pseudo);
    this.regionValue.setValue(this.user.region);
  })
    // console.log(this.user);
    // console.log(this.user?.hobbies);
    // console.log((this.user?.cover));
    // console.log(this.useravat2);
    this.useravat2 = this.user?.cover ? this.user.cover : 'wallpaper.jpg';
  // console.log(this.useravat2);
  
}



}
