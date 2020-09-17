import { Component, OnInit, Input, HostBinding } from '@angular/core';
import { Employee } from '../models/employee.model';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {

  @Input() employee : Employee;
  @HostBinding('attr.class') cssClass="alert alert-success" 

  constructor() { }

  ngOnInit() {
  }

}
