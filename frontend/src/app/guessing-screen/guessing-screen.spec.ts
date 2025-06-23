import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GuessingScreen } from './guessing-screen';

describe('GuessingScreen', () => {
  let component: GuessingScreen;
  let fixture: ComponentFixture<GuessingScreen>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GuessingScreen]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GuessingScreen);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
