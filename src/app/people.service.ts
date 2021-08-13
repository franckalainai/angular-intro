import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PeopleService {
  people = [
    {name: 'franck', age: 37},
    {name: 'martial', age: 40},
    {name: 'marc', age: 25},
    {name: 'yves', age: 20},
    {name: 'eric', age: 18}
  ];

  constructor() { }

  allPeople(){
    // we can call external API
    return this.people;
  }
}
