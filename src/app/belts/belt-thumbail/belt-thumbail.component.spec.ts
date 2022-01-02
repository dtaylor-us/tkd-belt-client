import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BeltThumbailComponent } from './belt-thumbail.component';

describe('BeltThumbailComponent', () => {
  let component: BeltThumbailComponent;
  let fixture: ComponentFixture<BeltThumbailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BeltThumbailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BeltThumbailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
