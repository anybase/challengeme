import { Component, OnInit,Input, Output, EventEmitter } from '@angular/core';

import { Challenge } from '@app/models';
@Component({
  selector: 'app-challenge',
  templateUrl: './challenge.component.html',
  styleUrls: ['./challenge.component.scss']
})
export class ChallengeComponent implements OnInit {

  constructor() { }
  private _challenge: Challenge;

  get challenge(): Challenge {
    return this._challenge;
  }

  @Input()
  set challenge(value: Challenge) {
    this._challenge = value;
  }
  @Output() selectedItem = new EventEmitter<Challenge>();

  onEventClick(event: Event, selectedItem: Challenge) {
    event.preventDefault();
   this.selectedItem.emit(selectedItem);
  }
  ngOnInit() {
  }

}
