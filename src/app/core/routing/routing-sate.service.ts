import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class RoutingSateService {
  static paths = {
    overview: 'overview',
    tabs: 'tabs',
    traning: 'traning',
    recognition: 'recognition',
    wellness: 'wellness',
    expansionStrategy: 'expansionStrategy',
    optimizationInitiative: 'optimizationInitiative',
    majorGroup: 'majorGroup',
    allocationMatrix: 'allocationMatrix',
    timeLineMilestones: 'timeLineMilestones',
    managementPlan: 'managementPlan',
    managementFramework: 'managementFramework',
  };

  constructor() {}
}
