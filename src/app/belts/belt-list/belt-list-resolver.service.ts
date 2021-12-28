import { Injectable } from '@angular/core';
import {BeltService} from '../belt.service';
import {Observable} from 'rxjs';
import {IBelt} from '../belt.model';

@Injectable({
  providedIn: 'root'
})
export class BeltListResolver {
  constructor(private beltService: BeltService) {
  }

  resolve(): Observable<IBelt[]> {
    return this.beltService.getBelts();
  }
}
