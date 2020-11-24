import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PPTComponent } from './ppt.component';

describe('PPTComponent', () => {
  let component: PPTComponent;
  let fixture: ComponentFixture<PPTComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PPTComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PPTComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
