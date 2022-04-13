import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar-offline',
  templateUrl: './navbar-offline.component.html',
  styleUrls: ['./navbar-offline.component.css']
})
export class NavbarOfflineComponent implements OnInit {

  constructor() { }

  previous(){
    window.history.back();
  }


  ngOnInit(): void {
  }

}
