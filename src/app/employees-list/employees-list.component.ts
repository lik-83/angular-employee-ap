import { Component, OnInit } from '@angular/core';
import { Employee } from '../models/employee.model'

@Component({
  selector: 'app-employees-list',
  templateUrl: './employees-list.component.html',
  styleUrls: ['./employees-list.component.css']
})
export class EmployeesListComponent implements OnInit {

  employees : Employee[];

  constructor() {
    this.employees = [];
  }

  ngOnInit() {
  }

  add(firstName : string, lastName : string) : boolean {
    this.employees.push(new Employee(firstName, lastName));
    return false;
  }

}
