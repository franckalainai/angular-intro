import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  name = 'Franck';
  counter = null;

  myColor = 'gray';

  people = [
    {name: 'franck', age: 37},
    {name: 'martial', age: 40},
    {name: 'marc', age: 25},
    {name: 'yves', age: 20},
    {name: 'leo', age: 30}
  ];

  ngOnInit(){
    this.counter = 0;
    this.myColor = 'red'
  }

  btnClicked = () => {
    this.counter++
  }
}
