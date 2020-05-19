import { Component, VERSION } from '@angular/core';
import {SService} from './s.service';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  name = 'Angular ' + VERSION.major;
  data:any;
  constructor(private service : SService){}
  loadData(){
    console.log('Button Clicked');
    this.service.getAPIDataService().subscribe((dataL)=>{
      console.log(dataL);
      this.data = dataL;
    })
  }
}
