import {Directive, ElementRef, Input, OnInit} from '@angular/core';

@Directive({
  selector: '[appBeltColor]'
})
export class BeltColorDirective implements OnInit {

  @Input() color = '';

  constructor(private el: ElementRef) {
  }

  ngOnInit(): void {
    this.el.nativeElement.style.backgroundColor = this.color
  }


}
