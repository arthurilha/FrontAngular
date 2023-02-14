import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pages',
  templateUrl: './pages.component.html',
  styleUrls: ['./pages.component.css']
})
export class PagesComponent implements OnInit {

  menu: boolean = true;
  constructor() { }

  ngOnInit() {
  }

  openMenu(){
    this.menu = false;
    console.log(this.menu)
  }
}
