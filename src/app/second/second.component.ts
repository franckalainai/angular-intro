import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-second',
  templateUrl: './second.component.html',
  styleUrls: ['./second.component.css']
})
export class SecondComponent implements OnInit {

  constructor(private route: ActivatedRoute, private location: Location) { }

  ngOnInit(): void {
    let ourId = +this.route.snapshot.paramMap.get('id');
    console.log(ourId);
  }

  backLocation(){
    this.location.back();
  }

}
