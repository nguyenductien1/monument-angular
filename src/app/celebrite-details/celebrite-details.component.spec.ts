import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CelebriteDetailsComponent } from './celebrite-details.component';

describe('CelebriteDetailsComponent', () => {
  let component: CelebriteDetailsComponent;
  let fixture: ComponentFixture<CelebriteDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CelebriteDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CelebriteDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
