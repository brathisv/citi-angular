import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app1';
  firstName = '';

  handleClick() {
    console.log("saved : "+this.firstName);
  }

  reset() {
    console.log("Reset...");
  }
}
