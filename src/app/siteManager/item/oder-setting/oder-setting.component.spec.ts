import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OderSettingComponent } from './oder-setting.component';

describe('OderSettingComponent', () => {
  let component: OderSettingComponent;
  let fixture: ComponentFixture<OderSettingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OderSettingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OderSettingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
