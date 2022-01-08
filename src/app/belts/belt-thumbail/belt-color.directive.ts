import {Directive, ElementRef, Input, OnInit} from '@angular/core';
import {beltColorMap} from '../belt.model';

@Directive({
  selector: '[appBeltColor]'
})
export class BeltColorDirective implements OnInit {

  @Input() color = '';
  @Input() stripe = '';

  constructor(private el: ElementRef) {
  }

  ngOnInit(): void {
    const stripeColor = this.stripe ? beltColorMap.get(this.stripe) : beltColorMap.get(this.color);
    this.el.nativeElement.style.backgroundColor = beltColorMap.get(this.color);
    this.el.nativeElement.style.borderLeft = `1.5rem solid ${stripeColor}`
  }


}
