import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-fil-dactu',
  templateUrl: './fil-dactu.component.html',
  styleUrls: ['./fil-dactu.component.css']
})
export class FilDactuComponent implements OnInit {

  @Input() userId!: string;

  constructor() { }

  ngOnInit(): void {
  }

}
