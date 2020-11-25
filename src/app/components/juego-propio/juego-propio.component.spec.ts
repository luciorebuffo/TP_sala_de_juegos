import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JuegoPropioComponent } from './juego-propio.component';

describe('JuegoPropioComponent', () => {
  let component: JuegoPropioComponent;
  let fixture: ComponentFixture<JuegoPropioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JuegoPropioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JuegoPropioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
