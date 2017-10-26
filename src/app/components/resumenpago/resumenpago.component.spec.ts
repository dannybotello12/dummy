import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ResumenpagoComponent } from './resumenpago.component';

describe('ResumenpagoComponent', () => {
  let component: ResumenpagoComponent;
  let fixture: ComponentFixture<ResumenpagoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResumenpagoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResumenpagoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
