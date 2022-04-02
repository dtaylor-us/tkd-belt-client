import {Component, Input, OnInit} from '@angular/core';
import {IBelt} from '../belt.model';
import {Level} from '../belt.model';

@Component({
  selector: 'app-belt-thumbail',
  templateUrl: './belt-thumbail.component.html',
  styleUrls: ['./belt-thumbail.component.css']
})
export class BeltThumbailComponent implements OnInit {

  @Input() belt: IBelt;
  visible = false;

  constructor() {
  }

  ngOnInit(): void {
  }

  toggleDetails() {
    this.visible = !this.visible;
  }

  isColorBelt(rank: string) : boolean {
    return rank !== Level.BLACK_BELT.toString()
  }
}
