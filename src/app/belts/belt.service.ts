import {Injectable} from '@angular/core';
import {IBelt} from './belt.model';
import {Observable, Subject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BeltService {

  constructor() {
  }

  getBelts(): Observable<IBelt[]> {
    const subject = new Subject<IBelt[]>();
    setTimeout(() => {
      subject.next(BELTS);
      subject.complete();
    }, 100);
    return subject;
  }
}


const BELTS: IBelt[] = [
  {
    id: 1,
    name: 'White',
    rank: 0,
    level: "Beginner",
    description: "N/A",
    breaking: ["Hammer Fist"],
    forms: ["Ki Bon Dong Jak"]
  }
];

