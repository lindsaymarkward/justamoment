import {Component, OnInit} from '@angular/core';
import * as moment from 'moment';

@Component({
  moduleId: module.id,
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Test for 3rd Party build (moment)';
  timestamp: string;

  ngOnInit() {
    this.timestamp = moment().format();
  }
}

