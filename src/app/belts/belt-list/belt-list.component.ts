import { Component, OnInit } from '@angular/core';
import {IBelt} from '../belt.model';
import {ActivatedRoute} from '@angular/router';
import {BeltService} from '../belt.service';

@Component({
  selector: 'app-belt-list',
  templateUrl: './belt-list.component.html',
  styleUrls: ['./belt-list.component.css']
})
export class BeltListComponent implements OnInit {
  belts: IBelt[] = [];

  constructor(private beltService: BeltService,
              private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.belts = this.route.snapshot.data["belts"];
  }
}
