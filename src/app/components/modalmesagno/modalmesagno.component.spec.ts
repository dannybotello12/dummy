import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalmesagnoComponent } from './modalmesagno.component';

describe('ModalmesagnoComponent', () => {
  let component: ModalmesagnoComponent;
  let fixture: ComponentFixture<ModalmesagnoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalmesagnoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalmesagnoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
