import {async, TestBed} from '@angular/core/testing';
import {NavComponent} from './nav.component';
import {CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import {MaterialModule} from '../../shared/modules/material.module';
import {TestsModule} from '../../shared/modules/tests.module';

describe('NavComponent', () => {
  let fixture;
  let component;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        TestsModule,
        MaterialModule
      ],
      declarations: [
        NavComponent
      ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    }).compileComponents();

    fixture = TestBed.createComponent(NavComponent);
    fixture.detectChanges();
    component = fixture.debugElement.componentInstance;
  }));

  it('should create nav component with constructor', (() => {
    const instance = new NavComponent();
    expect(instance).toBeTruthy();
  }));

  it('should create nav component', (() => {
    expect(component).toBeTruthy();
  }));
});
