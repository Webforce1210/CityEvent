import { Component, OnInit, Renderer2, ViewChild, QueryList, ElementRef} from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { User } from '../models/User.model';
import { UserService } from '../user.service';
import { FormControl } from '@angular/forms';
import { userInfo } from 'os';
import { MesActivitesComponent } from '../mes-activites/mes-activites.component';

@Component({
  selector: 'app-compte',
  templateUrl: './compte.component.html',
  styleUrls: ['./compte.component.css']
})

// Hobbies:[]=[{sport ='"<i class="bi bi-incognito icon-activity"></i>"'}
//   ,
//   cinema='"<i class="bi bi-incognito icon-activity"></i>"',
//   art:'<i class="bi bi-incognito icon-activity"></i>',
//   litterature:<i class="bi bi-incognito icon-activity"></i>"
// ]


export class CompteComponent implements OnInit {
  
  @ViewChild('inputElement', { static: false })
  inputElement!: ElementRef;


  constructor(private router:Router, private route:ActivatedRoute, private storage: UserService, private renderer: Renderer2) { }

  logoHobby = {
    surf : "bi bi-tsunami icon-activity",
    science : "bi bi-robot icon-activity",
    navigation : "bi bi-life-preserver icon-activity",
    football: "bi bi-dribbble icon-activity",
    sport: "bi bi-reddit icon-activity"
  }

  // sport= "bi bi-dribbble icon-activity";
  user:User|null=null;
  // isReadOnly:boolean = true;
  isReadonly:boolean = true;

  nameValue = new FormControl ("");

  regionValue = new FormControl ("");

  ngOnInit(): void {
    this.storage.init();
    this.route.paramMap.subscribe(param=>{
    
    this.user = this.storage.findUserById(param.get('userid')) as User; //userid
    // console.log(this.user,'userssssssssssssssss');
    
    this.nameValue.setValue(this.user.pseudo);
    this.regionValue.setValue(this.user.region);
  })
    console.log(this.user);
    console.log(this.user?.hobbies);
    // console.log((this.user?.hobbies[1]));

  
    
  }


    
  useravat : string= "wallpaper.jpg"; // faire l'acquisition en dynamique
  useravat2 : string = "wallpaper2.jpg";
  
  
  
  
  

  // modif(){
  //   if(this.isReadOnly == true){
  //     this.isReadOnly = false;
  //   }else if(this.isReadOnly == false){
  //     this.isReadOnly = true;
  //   }

  // }
  updateTask(){

    if(this.user){
    this.user.pseudo = this.nameValue.value;
    this.user.region = this.regionValue.value;
  }else{
    alert('attention pas de tache en cours');
  }
    this.storage.update(this.user);
    this.router.navigate(['/compte/1']);
    }
  
addAttribute() {
  this.renderer.setAttribute(this.inputElement.nativeElement, 'readOnly', 'isReadOnly' );
}
removeAttribute() {
  this.renderer.removeAttribute(this.inputElement.nativeElement, 'readOnly');
}


  
// bouton modification  -> popup modifier ou voir en tant que invité
toggleReadonly() {
  this.isReadonly = !this.isReadonly;
}

}