import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BeltListDetailsComponent } from './belt-list-details.component';

describe('BeltListDetailsComponent', () => {
  let component: BeltListDetailsComponent;
  let fixture: ComponentFixture<BeltListDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BeltListDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BeltListDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
