import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserTsComponent } from './user.ts.component';

describe('UserTsComponent', () => {
  let component: UserTsComponent;
  let fixture: ComponentFixture<UserTsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UserTsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserTsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
