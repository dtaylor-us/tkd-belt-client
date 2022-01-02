import {Component, Input, OnInit} from '@angular/core';
import {IBelt} from '../belt.model';

@Component({
  selector: 'app-belt-thumbail',
  templateUrl: './belt-thumbail.component.html',
  styleUrls: ['./belt-thumbail.component.css']
})
export class BeltThumbailComponent implements OnInit {
  // @ts-ignore
  @Input() belt: IBelt;

  constructor() {
  }

  ngOnInit(): void {
  }

}
