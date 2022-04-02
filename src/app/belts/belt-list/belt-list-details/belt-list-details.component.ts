import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-belt-list-details',
  templateUrl: './belt-list-details.component.html',
  styleUrls: ['./belt-list-details.component.css']
})
export class BeltListDetailsComponent implements OnInit {
  @Input() title: string;
  @Input() details: string[];
  @Input() isColorBelt: boolean;
  constructor() { }

  ngOnInit(): void {
  }

}
