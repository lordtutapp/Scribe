import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  name: string="sougata";
  amnt: number=1998.11234;
  date = new Date();
  constructor() { }

  ngOnInit(): void {
  }

}
