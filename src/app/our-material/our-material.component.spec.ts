import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OurMaterialComponent } from './our-material.component';

describe('OurMaterialComponent', () => {
  let component: OurMaterialComponent;
  let fixture: ComponentFixture<OurMaterialComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OurMaterialComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OurMaterialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
