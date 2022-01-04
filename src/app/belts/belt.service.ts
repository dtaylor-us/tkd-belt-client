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
    name: 'White Belt',
    color: 'White',
    rank: 0,
    level: "Beginner",
    description: "means that a student is pure or without knowledge or the control of the  mind over the body which is basic to Taekwondo.",
    breaking: ["Hammer Fist"],
    kicks: ["Front Kick, Round Kick"],
    forms: ["Ki Bon Dong Jak"]
  },
  {
    id: 2,
    name: '9th Keup Yellow',
    color: 'yellow',
    rank: 2,
    level: "Beginner",
    description: "Symbolizes that the student, likened to a seed, is beginning to see the  sunlight",
    breaking: ["Axe Kick"],
    kicks: ["Side Kick", "Axe Kick"],
    forms: ["Poomse Taekwondo"],
  },
  {
    id: 3,
    name: '8th Keup Orange',
    color: 'orange',
    rank: 3,
    level: "Beginner",
    description: "Symbolizes that the student, likened to a seed, is beginning to see the  sunlight",
    breaking: ["Hoping Side Kick"],
    kicks: ["Side Kick", "Axe Kick"],
    forms: ["Taegeuk Il Jang"],
  },
  {
    id: 4,
    name: '7th Keup Green',
    color: 'green',
    rank: 4,
    level: "Beginner",
    description: "Symbolizes that the student, likened to a seed, is beginning to see the  sunlight",
    breaking: ["Hoping Axe Kick"],
    kicks: ["Fast Axe Kick"],
    forms: ["Taegeuk Yi Jang"],
  },
//  TODO INTERMEDIATE, ADVANCED AND BLACK BELT
];

