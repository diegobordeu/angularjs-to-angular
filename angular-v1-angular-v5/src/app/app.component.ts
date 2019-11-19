import { numberService } from './ng1-app/services/numberService'
import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'AngularJS/Angular 5 Hybrid Application';
  public serviceTest = '';

  constructor(private numberSevice: numberService){
    this.serviceTest = this.numberSevice.toVerySmallText(10000000);
    // constructor(){
    console.log(this.numberSevice.toVerySmallText(10000000));
  }
}
