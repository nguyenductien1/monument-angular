import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CelebriteManageComponent } from './celebrite-manage.component';

describe('CelebriteManageComponent', () => {
  let component: CelebriteManageComponent;
  let fixture: ComponentFixture<CelebriteManageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CelebriteManageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CelebriteManageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
