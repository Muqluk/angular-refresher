export interface ICareSettings {
  isAcute?: boolean;
  isInpatient?: boolean;
  isOutpatient?: boolean;
  isRespiratory?: boolean;
  primaryCareSettingId?: number;
}

export interface IFacility extends ICareSettings {
  facilityCode?: string;
  description?: string;
}

export class Facility implements IFacility {
  description?: string;
  facilityCode?: string;
  isAcute?: boolean;
  isInpatient?: boolean;
  isOutpatient?: boolean;
  isRespiratory?: boolean;
  primaryCareSettingId?: number;

  constructor(model?: IFacility) {
    if (!model) { model = {} }
    this.description = model.description ? model.description : '';

    this.facilityCode = model.facilityCode ? model.facilityCode : '';
    this.isAcute = model.isAcute ? model.isAcute : false;
    this.isInpatient = model.isInpatient ? model.isInpatient : false;
    this.isOutpatient = model.isOutpatient ? model.isOutpatient : false;
    this.isRespiratory = model.isRespiratory ? model.isRespiratory : false;
    this.primaryCareSettingId = model.primaryCareSettingId ? model.primaryCareSettingId : 0;
  }

}
