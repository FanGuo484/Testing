import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-test',

  templateUrl:'./test.component.html', 

  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {
  displayName = true;
  public color="red";

  public colors=["red","blue","green","yellow"];

  public employees =[];
  
  constructor(private _employeeService: EmployeeService) { }

  ngOnInit(): void {
    this._employeeService.getEmployees()
    .subscribe(data => this.employees=data );
  }

}
