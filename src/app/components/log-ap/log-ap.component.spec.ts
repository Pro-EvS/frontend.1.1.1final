import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LogApComponent } from './log-ap.component';

describe('LogApComponent', () => {
  let component: LogApComponent;
  let fixture: ComponentFixture<LogApComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LogApComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LogApComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
