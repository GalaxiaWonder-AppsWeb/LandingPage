import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OverviewListComponent } from './overview-list.component';

describe('OverviewListComponent', () => {
  let component: OverviewListComponent;
  let fixture: ComponentFixture<OverviewListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OverviewListComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OverviewListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
