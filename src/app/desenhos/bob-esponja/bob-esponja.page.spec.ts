import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { BobEsponjaPage } from './bob-esponja.page';

describe('BobEsponjaPage', () => {
  let component: BobEsponjaPage;
  let fixture: ComponentFixture<BobEsponjaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BobEsponjaPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(BobEsponjaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
