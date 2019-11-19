import { nativeServiceProvider } from './services/nativeService';
import { TestDirectiveWithNativeService } from './imported/directive-with-native-service/directive-with-wative-service';
import { numberServiceProvider } from './services/numberService';
import { testDirectiveComponent } from './imported/ng1-test-directive/test-directive.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ApplicationRef } from '@angular/core';
import { setUpLocationSync } from '@angular/router/upgrade';
import { UpgradeModule } from '@angular/upgrade/static';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { myApp } from './ng1-app/app';
import { nativeService } from './ng1-app/services/nativeService';
import { NewComponentComponent } from './new-component/new-component.component';

@NgModule({
  declarations: [
    AppComponent,
    testDirectiveComponent,
    TestDirectiveWithNativeService,
    NewComponentComponent,
  ],
  entryComponents: [
    AppComponent,
    NewComponentComponent,
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    UpgradeModule
  ],
  providers: [
    {provide: '$scope', useExisting: '$rootScope'},
    numberServiceProvider,
    nativeServiceProvider,
  ],
//   providers: [
//     {
//     provide: '$scope',
//     useFactory: i => i.get('$rootScope'),
//     deps: ['$injector']
// }
// ],
  // bootstrap: [AppComponent]
  //   remove automatic bootstrapping to allow bootstrapping ng1 app alongside ng2 app.
  //   must add `AppComponent` to `entryComponents`
})
export class AppModule {
  constructor(private upgrade: UpgradeModule) { 
        // bootstrap ng1 app
    this.upgrade.bootstrap(document.body, [myApp.name], { strictDi: false });
    setUpLocationSync(this.upgrade); // https://github.com/angular/angular/issues/14081

  }

  public ngDoBootstrap(ref: ApplicationRef) {
    ref.bootstrap(AppComponent); // manual bootstrap AppComponent
    console.log(myApp.name);
    
    
  }
}
