import { Injectable } from '@angular/core';
import { Data } from '../models/data.model';

let data: Data[] = [{
  day: "Monday",
  oranges: 3
}, {
  day: "Tuesday",
  oranges: 2
}, {
  day: "Wednesday",
  oranges: 3
}, {
  day: "Thursday",
  oranges: 4
}, {
  day: "Friday",
  oranges: 6
}, {
  day: "Saturday",
  oranges: 11
}, {
  day: "Sunday",
  oranges: 4
}];
@Injectable({
  providedIn: 'root'
})

export class GraphicsService {
  getData(): Data[] {
    return data;
  }
}
