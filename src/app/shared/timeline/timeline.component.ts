import { Component, OnInit, Input } from '@angular/core';
import {Timeline} from '@app/models'
@Component({
  selector: 'app-timeline',
  templateUrl: './timeline.component.html',
  styleUrls: ['./timeline.component.scss']
})
export class TimelineComponent implements OnInit {
  constructor() { }

  ngOnInit() {
  }
  private _timelines: Timeline[];
  post: Timeline;
  get timelines(): Timeline[] {
    return this._timelines;
  }

  @Input()
  set timelines(value: Timeline[]) {
    console.log(value);
    this._timelines = value;
  }

}
