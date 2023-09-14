import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  public txt:string

  constructor() {}

  ngOnInit() {
    this.txt = "Olá tudo bem?"
  }

  clicou() {
    this.txt = "Clicou"
  }

}
