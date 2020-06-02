import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { BreakingBadPage } from './breaking-bad.page';

describe('BreakingBadPage', () => {
  let component: BreakingBadPage;
  let fixture: ComponentFixture<BreakingBadPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BreakingBadPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(BreakingBadPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
