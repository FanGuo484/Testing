import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public ImgURL="https://angularimgs.s3.us-east-2.amazonaws.com/computer-icons-steam-tuners-steam.jpg";

  public employees =[];
  constructor(private _employeeService: EmployeeService) { 

  }
  public name = "mason";
  ngOnInit(): void {
   this._employeeService.getEmployees()
    .subscribe(data => this.employees=data );
  }

}
