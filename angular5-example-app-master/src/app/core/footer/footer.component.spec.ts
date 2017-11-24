import {async, TestBed} from '@angular/core/testing';
import {FooterComponent} from './footer.component';
import {CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
describe('FooterComponent', () => {
  let fixture;
  let component;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        FooterComponent
      ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    }).compileComponents();

    fixture = TestBed.createComponent(FooterComponent);
    fixture.detectChanges();
    component = fixture.debugElement.componentInstance;
  }));

  it('should create footer component', (() => {
    expect(component).toBeTruthy();
  }));
});
