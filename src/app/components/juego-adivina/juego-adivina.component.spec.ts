import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JuegoAdivinaComponent } from './juego-adivina.component';

describe('JuegoAdivinaComponent', () => {
  let component: JuegoAdivinaComponent;
  let fixture: ComponentFixture<JuegoAdivinaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JuegoAdivinaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JuegoAdivinaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
