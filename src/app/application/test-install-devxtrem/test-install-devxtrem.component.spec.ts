import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestInstallDevxtremComponent } from './test-install-devxtrem.component';

describe('TestInstallDevxtremComponent', () => {
  let component: TestInstallDevxtremComponent;
  let fixture: ComponentFixture<TestInstallDevxtremComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestInstallDevxtremComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestInstallDevxtremComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
