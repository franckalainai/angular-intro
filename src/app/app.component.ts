import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  name = 'Franck';
  counter = 0;

  btnClicked = () => {
    this.counter++
  }
}
