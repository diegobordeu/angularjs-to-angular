import { numberService } from './ng1-app/services/numberService'
import { Component } from '@angular/core';
import { nativeService } from './ng1-app/services/nativeService';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'AngularJS/Angular 5 Hybrid Application';
  public serviceTest = '';

  constructor(
    private numberSevice: numberService,
    private nativeService: nativeService,
    ){
    this.serviceTest = this.numberSevice.toVerySmallText(10000000);
    nativeService.tryHttp('http://localhost:3000/api/v1/places/all/names', (err, result) => {
      if (err) {
        console.log({ err });
      } else {
        console.log({result});
      }
    });
    console.log(this.numberSevice.toVerySmallText(10000000));
  }
}
