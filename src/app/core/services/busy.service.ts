import { NgxSpinnerService } from 'ngx-spinner';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BusyService {

  busyRequestCount = 0;
  constructor(private spinnerServes: NgxSpinnerService) { }

  busy(){
    this.busyRequestCount++
    this.spinnerServes.show(undefined,{
      type : "ball-atom",
      bdColor : "rgba(0, 0, 0, 0.8)", 
      size : "medium" ,
      color : "#fff" ,
    });
  }

  idle(){
    this.busyRequestCount--
    if(this.busyRequestCount <= 0){
      this.busyRequestCount = 0;
      this.spinnerServes.hide();
    }
  }
}
