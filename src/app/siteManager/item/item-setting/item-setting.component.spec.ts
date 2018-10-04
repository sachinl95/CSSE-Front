import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemSettingComponent } from './item-setting.component';

describe('ItemSettingComponent', () => {
  let component: ItemSettingComponent;
  let fixture: ComponentFixture<ItemSettingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ItemSettingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemSettingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
