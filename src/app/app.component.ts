import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  name = 'Franck';
  counter = 0;
  people = [
    {name: 'franck', age: 37},
    {name: 'martial', age: 40},
    {name: 'marc', age: 25},
    {name: 'yves', age: 20},
    {name: 'leo', age: 30}
  ];

  btnClicked = () => {
    this.counter++
  }
}
