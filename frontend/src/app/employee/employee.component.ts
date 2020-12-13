import { Component, OnInit } from '@angular/core';

import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.sass']
})
export class EmployeeComponent implements OnInit {

  service: EmployeeService

  departments = [
    { id: 1, value: 'Dep 1'},
    { id: 2, value: 'Dep 2'},
    { id: 3, value: 'Dep 3'}]

  constructor(service: EmployeeService) {
    this.service = service
   }

  ngOnInit(): void {
    console.log("Entrei em employee.component.ts")
  }

  onClear(){
    this.service.form.reset();
    this.service.initializeFormGroup();
  }
}
