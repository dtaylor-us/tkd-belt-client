import {Injectable} from '@angular/core';
import {IBelt, Rank} from './belt.model';
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
    color: 'white',
    rank: 0,
    level: Rank.BEGINNER.toString(),
    description: "Means that a student is pure or without knowledge or the control of the  mind over the body which is basic to Taekwondo.",
    breaking: ["Hammer Fist"],
    kicks: ["Front Kick", "Round Kick"],
    forms: ["Ki Bon Dong Jak"]
  },
  {
    id: 2,
    name: '9th Keup Yellow',
    color: 'yellow',
    rank: 2,
    level: Rank.BEGINNER.toString(),
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
    level: Rank.BEGINNER.toString(),
    breaking: ["Hoping Side Kick"],
    kicks: ["Side Kick", "Axe Kick"],
    forms: ["Taegeuk Il Jang"],
  },
  {
    id: 4,
    name: '7th Keup Green',
    color: 'green',
    rank: 4,
    level: Rank.BEGINNER.toString(),
    description: "Represents the seed just beginning to grow.",
    breaking: ["Hoping Axe Kick"],
    kicks: ["Fast Axe Kick"],
    forms: ["Taegeuk Yi Jang"],
  },
  {
    id: 5,
    name: '6th Keup Purple',
    color: 'purple',
    rank: 5,
    level: Rank.INTERMEDIATE.toString(),
    breaking: ["Knife Hand Strike"],
    kicks: ["Fast Kick"],
    forms: ["Taegeuk Sam Jang"],
  },
  {
    id: 6,
    name: '5th Keup Blue',
    color: 'blue',
    rank: 6,
    level: Rank.INTERMEDIATE.toString(),
    breaking: ["Back Kick"],
    kicks: ["Back Kick"],
    forms: ["Taegeuk Sa Jang"],
  },
  {
    id: 7,
    name: '4th Keup Blue',
    color: 'blue',
    rank: 7,
    level: Rank.INTERMEDIATE.toString(),
    breaking: ["360 Back Kick"],
    kicks: ["360 Back Kick"],
    forms: ["Taegeuk Oh Jang"],
    stripe: "brown"
  },
  {
    id: 8,
    name: '3rd Keup Brown',
    color: 'brown',
    rank: 8,
    level: Rank.ADVANCED.toString(),
    breaking: ["360 Round Kick"],
    kicks: ["360 Round Kick"],
    forms: ["Taegeuk Yuk Jang"],
  },
  {
    id: 9,
    name: '2nd Keup Red',
    color: 'red',
    rank: 9,
    level: Rank.ADVANCED.toString(),
    breaking: ["Spin Hook Kick"],
    kicks: ["Spin Hook Kick", "Inside Crescent"],
    forms: ["Taegeuk Chil Jang"],
    stripe: "white"
  },
  {
    id: 10,
    name: '1st Keup Red',
    color: 'red',
    rank: 10,
    level: Rank.ADVANCED.toString(),
    breaking: ["Jumping Back Kick", "One Hand Technique"],
    kicks: ["Jumping Back Kick"],
    forms: ["Taegeuk Pahl Jang"],
    stripe: "black"
  },
//  TODO INTERMEDIATE, ADVANCED AND BLACK BELT
];

