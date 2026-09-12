import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideHttpClient } from '@angular/common/http';
import { provideHttpClientTesting } from '@angular/common/http/testing';

import { Designation } from './designation';

describe('Designation', () => {
  let component: Designation;
  let fixture: ComponentFixture<Designation>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Designation],
      providers: [provideHttpClient(), provideHttpClientTesting()],
    }).compileComponents();

    fixture = TestBed.createComponent(Designation);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
