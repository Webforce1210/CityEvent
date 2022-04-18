import { Component, OnInit, Renderer2, ViewChild, QueryList, ElementRef} from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { User } from '../models/User.model';
import { UserService } from '../user.service';
import { FormControl } from '@angular/forms';
let myLogo = require("../../assets/data.json");


@Component({
  selector: 'app-compte',
  templateUrl: './compte.component.html',
  styleUrls: ['./compte.component.css']
})




export class CompteComponent implements OnInit {
  
  @ViewChild('inputElement', { static: false })
  inputElement!: ElementRef;
  @ViewChild('btn', { static: false })
  btn!: ElementRef;


  constructor(public router:Router, private route:ActivatedRoute, private storage: UserService, private renderer: Renderer2) {
    this.logoHobby = myLogo.logoHobby;
  }

  logoHobby: any[];

  user:User|null=null;

  isReadonly:boolean = true;
  isView:boolean = true;
  nameValue = new FormControl ("");

  regionValue = new FormControl ("");
  
  useravat2:string | null = null;
  

  ngOnInit(): void {
    this.storage.init();
    this.route.paramMap.subscribe(param=>{
    
    this.user = this.storage.findUserById(param.get('userid')) as User; //userid
    
    
    this.nameValue.setValue(this.user.pseudo);
    this.regionValue.setValue(this.user.region);
    })
    
    this.useravat2 = this.user?.cover ? this.user.cover : 'wallpaper.jpg';
  
  }


    
  useravat : string = "wallpaper.jpg"; // faire l'acquisition en dynamique
  
  
  
  switchbtn(){
    
    this.isView = !this.isView;
  
  }

  // updateTask(){ // A finir

  //   if(this.user){
  //   this.user.pseudo = this.nameValue.value;
  //   this.user.region = this.regionValue.value;
  // }else{
  //   alert('attention pas de tache en cours');
  // }
  //   this.storage.update(this.user);
  //   this.router.navigate(['/compte/1']);
  //   }
  
// addAttribute() {
//   this.renderer.setAttribute(this.inputElement.nativeElement, 'readOnly', 'isReadOnly' );
// }
// removeAttribute() {
//   this.renderer.removeAttribute(this.inputElement.nativeElement, 'readOnly');
// }


  
// bouton modification  -> popup modifier ou voir en tant que invité
  toggleReadonly() {
    this.isReadonly = !this.isReadonly;

  }

}