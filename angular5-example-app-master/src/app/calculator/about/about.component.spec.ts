import {async, TestBed} from '@angular/core/testing';
import {APP_BASE_HREF} from '@angular/common';
import {AboutComponent} from './about.component';
import {TestsModule} from '../../shared/modules/tests.module';
import {APP_CONFIG, AppConfig} from '../../config/app.config';
import {CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';

describe('AboutComponent', () => {
  let fixture;
  let component;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        TestsModule
      ],
      declarations: [
        AboutComponent
      ],
      providers: [
        {provide: APP_CONFIG, useValue: AppConfig},
        {provide: APP_BASE_HREF, useValue: '/'}
      ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    }).compileComponents();

    fixture = TestBed.createComponent(AboutComponent);
    fixture.detectChanges();
    component = fixture.debugElement.componentInstance;
  }));
});
