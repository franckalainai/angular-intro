import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {
  @Input() monEcole: any;
  @Output() changed = new EventEmitter()
  constructor() { }

  ngOnInit(): void {
    this.changed.emit('ITA mon ecole');
  }


}
