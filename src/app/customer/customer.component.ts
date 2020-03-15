import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html'
  
})
export class CustomerComponent implements OnInit {
  title = "hello class";
  Time = "2019/01/03";
  isDisabled = false;

  clickHandler(event){
    this.title="Changed";
  }
  constructor() { }

  ngOnInit(): void {
  }

}
