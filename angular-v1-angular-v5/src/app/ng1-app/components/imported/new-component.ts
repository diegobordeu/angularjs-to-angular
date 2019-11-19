import { NewComponentComponent } from '../../../new-component/new-component.component';

/* . . . */
import { module } from "angular";
import { downgradeComponent } from '@angular/upgrade/static';

module('myApp.test.angular-5', [])
.directive(
    'appNewComponent',
    downgradeComponent({ component: NewComponentComponent }) as angular.IDirectiveFactory
);
