import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VacationRequests } from './vacation-requests.component';

describe('VacationRequestsComponent', () => {
  let component: VacationRequests;
  let fixture: ComponentFixture<VacationRequests>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VacationRequests],
    }).compileComponents();

    fixture = TestBed.createComponent(VacationRequests);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
