import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { HeaderOverviewComponent } from './header-overview.component';
import {TranslateModule, TranslateService} from "@ngx-translate/core";

describe('HeaderOverviewComponent', () => {
  let component: HeaderOverviewComponent;
  let fixture: ComponentFixture<HeaderOverviewComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [HeaderOverviewComponent, TranslateModule.forRoot()],
      providers:[
        TranslateService
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(HeaderOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
