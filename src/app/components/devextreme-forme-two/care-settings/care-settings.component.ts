import { Component, Input, OnInit } from '@angular/core';
import { NestedOptionHost } from 'devextreme-angular/core';
import { ICareSettings } from '../facility-model';

@Component({
  selector: 'app-care-settings',
  templateUrl: './care-settings.component.html',
  styleUrls: ['./care-settings.component.scss'],
  providers: [NestedOptionHost],
})
export class CareSettingsComponent implements OnInit {
  careSettings: ICareSettings = {};
  @Input('careSettings') set cs(careSettings: ICareSettings) {
    if (careSettings) {
      this.careSettings = careSettings;
    }
  }

  isAcute: boolean = false;


  constructor(private nestedOptionsHost: NestedOptionHost) { }

  ngOnInit(): void {
  }

}
