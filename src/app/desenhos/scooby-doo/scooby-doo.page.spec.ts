import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ScoobyDooPage } from './scooby-doo.page';

describe('ScoobyDooPage', () => {
  let component: ScoobyDooPage;
  let fixture: ComponentFixture<ScoobyDooPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ScoobyDooPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ScoobyDooPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
