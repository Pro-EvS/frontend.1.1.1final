import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BtnlogComponent } from './btnlog.component';

describe('BtnlogComponent', () => {
  let component: BtnlogComponent;
  let fixture: ComponentFixture<BtnlogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BtnlogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BtnlogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
