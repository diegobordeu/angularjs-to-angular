import { Directive, ElementRef, Injector, SimpleChanges } from '@angular/core';
import { UpgradeComponent } from '@angular/upgrade/static';

@Directive({
  selector: 'directive-with-native-service'
})
export class TestDirectiveWithNativeService extends UpgradeComponent {
  constructor(elementRef: ElementRef, injector: Injector) {
    super('testDirectiveWithNativeService', elementRef, injector);
  }
}