import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideHttpClient } from '@angular/common/http';
import { provideHttpClientTesting } from '@angular/common/http/testing';

import { ClientProject } from './client-project';

describe('ClientProject', () => {
  let component: ClientProject;
  let fixture: ComponentFixture<ClientProject>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ClientProject],
      providers: [provideHttpClient(), provideHttpClientTesting()],
    }).compileComponents();

    fixture = TestBed.createComponent(ClientProject);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
