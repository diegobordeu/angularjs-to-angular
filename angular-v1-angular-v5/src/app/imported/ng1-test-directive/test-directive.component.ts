import { Directive, ElementRef, Injector, SimpleChanges } from '@angular/core';
import { UpgradeComponent } from '@angular/upgrade/static';

@Directive({
  selector: 'test'
})
export class testDirectiveComponent extends UpgradeComponent {
  constructor(elementRef: ElementRef, injector: Injector) {
    super('testDirective', elementRef, injector);
  }
}