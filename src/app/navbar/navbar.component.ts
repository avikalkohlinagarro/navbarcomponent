import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  homeCurrent = true;
  newsCurrent = false;
  contactCurrent = false;
  descCurrent = false;
  // status = 'You are at Home';
  @Input() statusMessage: string;
  @Output() statusChange = new EventEmitter<string>();

  homeActive() {
    this.homeCurrent = true;
    this.newsCurrent = false;
    this.contactCurrent = false;
    this.descCurrent = false;
    this.statusMessage = 'Home';
    this.statusChange.emit('Home');
  }

  newsActive() {
    this.homeCurrent = false;
    this.newsCurrent = true;
    this.contactCurrent = false;
    this.descCurrent = false;
    // this.statusMessage = 'News';
    this.statusChange.emit('News');
  }

  contactActive() {
    this.homeCurrent = false;
    this.newsCurrent = false;
    this.contactCurrent = true;
    this.descCurrent = false;
    // this.statusMessage = 'Contact';
    this.statusChange.emit('Contact');
  }

  descActive() {
    this.homeCurrent = false;
    this.newsCurrent = false;
    this.contactCurrent = false;
    this.descCurrent = true;
    // this.statusMessage = 'Description';
    this.statusChange.emit('Description');
  }

  constructor() { }

  ngOnInit() {
  }

}
