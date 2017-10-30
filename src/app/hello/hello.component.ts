import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-hello',
  templateUrl: './hello.component.html',
  // template: `{{1+1+getVar()}}
  //   <!--<button (click)="toggle()">Toggle</button>-->
  //   <!--<span [ngClass]="{'active': isActive}">{{name}}</span>-->
  // `,
  styleUrls: ['./hello.component.css']
})
export class HelloComponent implements OnInit {
  name = 'Avikal';
  isActive = true;
  status = 'Home';
  @Input() statusMessage: string;

  toggle() {
    this.isActive = !this.isActive;
  }
  getVar() {
    return 2;
  }
  constructor() { }

  ngOnInit() {
  }

}
