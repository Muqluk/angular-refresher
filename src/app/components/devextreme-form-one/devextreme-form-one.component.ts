import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-devextreme-form-one',
  templateUrl: './devextreme-form-one.component.html',
  styleUrls: ['./devextreme-form-one.component.scss']
})
export class DevextremeFormOneComponent implements OnInit {
  employee = {
    name: 'John Heart',
    officeNumber: 901,
    hireDate: new Date(2012, 4, 13)
  }


  constructor() { }

  ngOnInit(): void {
  }

  hireDateOptions = {
    disabled: true
  }

}
