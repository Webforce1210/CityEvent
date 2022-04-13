import { Component, OnInit, Renderer2, ViewChild, QueryList, ElementRef} from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { User } from '../models/User.model';
import { UserService } from '../user.service';
import { FormControl } from '@angular/forms';
let myRegion = require("../../assets/data.json");


@Component({
  selector: 'app-edit-bandeau',
  templateUrl: './edit-bandeau.component.html',
  styleUrls: ['./edit-bandeau.component.css']
})
export class EditBandeauComponent implements OnInit {

  constructor(private router:Router, private route:ActivatedRoute, private storage: UserService, private renderer: Renderer2) {
    this.myregion = myRegion.regions;
    }

    
    
  
  myregion: any[];

  user:User|null=null;
    // isReadOnly:boolean = true;
    isReadonly:boolean = true;
    isView:boolean = true;
    nameValue = new FormControl ("");
  
    regionValue = new FormControl ("");
    
    
    useravat2:string | null = null;
    
  
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
    //  console.log(this.useravat2);
    
      
    }    
    switc(){
      
      this.isView = !this.isView;
      // this.renderer.removeClass(this.btn.nativeElement, 'btn-danger');
      // this.renderer.addClass(this.btn.nativeElement, 'btn-success');
    
  }
    
    
  
    // modif(){
    //   if(this.isReadOnly == true){
    //     this.isReadOnly = false;
    //   }else if(this.isReadOnly == false){
    //     this.isReadOnly = true;
    //   }
  
    // }
    updateTask(){ // A finir
  
      if(this.user){
      this.user.pseudo = this.nameValue.value;
      this.user.region = this.regionValue.value;
    }else{
      alert('attention pas de tache en cours');
    }
      this.storage.update(this.user);
      this.router.navigate(['/compte/1']);
      }
    
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

