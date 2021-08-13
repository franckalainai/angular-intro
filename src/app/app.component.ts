import { Component, OnInit } from '@angular/core';
import { PeopleService } from './people.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  name = 'Franck';
  counter = null;
  myColor = 'gray';
  people = [];

  constructor(private peopleService: PeopleService){}

  ngOnInit(){
    this.counter = 0;
    this.myColor = 'red'
    this.people = this.peopleService.allPeople();
  }

  btnClicked = () => {
    this.counter++
  }
}
