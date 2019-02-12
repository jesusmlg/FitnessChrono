import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SetupChronosComponent } from './setup-chronos.component';

describe('SetupChronosComponent', () => {
  let component: SetupChronosComponent;
  let fixture: ComponentFixture<SetupChronosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SetupChronosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SetupChronosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
