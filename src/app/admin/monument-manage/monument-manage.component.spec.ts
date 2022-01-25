import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MonumentManageComponent } from './monument-manage.component';

describe('MonumentManageComponent', () => {
  let component: MonumentManageComponent;
  let fixture: ComponentFixture<MonumentManageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MonumentManageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MonumentManageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
