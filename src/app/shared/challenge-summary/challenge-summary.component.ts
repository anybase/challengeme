import { Component, OnInit, Input } from '@angular/core';
import {Timeline} from '@app/models'
@Component({
  selector: 'app-challenge-summary',
  templateUrl: './challenge-summary.component.html',
  styleUrls: ['./challenge-summary.component.scss']
})
export class ChallengeSummaryComponent implements OnInit {
  content = `Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.`;
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
    this._timelines = value;
  }

}
