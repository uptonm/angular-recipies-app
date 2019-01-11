import { Directive, HostBinding, HostListener, Renderer2 } from '@angular/core';
@Directive({
  selector: '[appDropdown]'
})
export class DropdownDirective {
  @HostBinding('class.open') isOpen = false;

  // @HostListener('mouseenter') onMouseEnter() {
  //   this.isOpen = true;
  // }

  @HostListener('mouseleave') onMouseLeave() {
    this.isOpen = false;
  }

  @HostListener('click') toggleOpen() {
    this.isOpen = !this.isOpen;
  }
}
