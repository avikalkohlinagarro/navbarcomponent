import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  status = 'Home';

  statusChange(val: string) {
    this.status = val;
    console.log(this.status);
  }
}
