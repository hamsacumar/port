import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CertuComponent } from './certu.component';

describe('CertuComponent', () => {
  let component: CertuComponent;
  let fixture: ComponentFixture<CertuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CertuComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CertuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
