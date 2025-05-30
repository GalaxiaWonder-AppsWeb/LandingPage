import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ToolbarContentComponent } from './toolbar-content.component';

describe('HeaderContentComponent', () => {
  let component: ToolbarContentComponent;
  let fixture: ComponentFixture<ToolbarContentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ToolbarContentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ToolbarContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
