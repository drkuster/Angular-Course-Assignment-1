import { Component } from '@angular/core';
import * as moment from 'moment';

@Component
({
  selector: 'app-timestamp',
  templateUrl: './timestamp.component.html',
  styleUrls: ['./timestamp.component.css']
})

export class TimestampComponent
{
  now = moment().format('MMMM Do YYYY, h:mm:ss a');
}
