import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HtmldemoComponent } from './htmldemo.component';

describe('HtmldemoComponent', () => {
  let component: HtmldemoComponent;
  let fixture: ComponentFixture<HtmldemoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HtmldemoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HtmldemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
