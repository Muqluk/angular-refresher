import {
  Component,
  OnInit
} from '@angular/core';

import { NestedOptionHost } from 'devextreme-angular/core';
import {
  IFacility
} from './facility-model';




@Component({
  selector: 'app-devextreme-forme-two',
  templateUrl: './devextreme-forme-two.component.html',
  styleUrls: ['./devextreme-forme-two.component.scss'],
  providers: [NestedOptionHost],
})
export class DevextremeFormeTwoComponent implements OnInit {

  currentFacility: IFacility = {
    description: '',
    facilityCode: '',
    isAcute: false,
    isInpatient: false,
    isOutpatient: false,
    isRespiratory: false,
    primaryCareSettingId: 0,
  }

  constructor(private nestedOptionsHost: NestedOptionHost) { }

  ngOnInit(): void {
  }


}
