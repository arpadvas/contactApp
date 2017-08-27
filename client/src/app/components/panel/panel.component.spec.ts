import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { PanelComponent } from './panel.component';

describe('PanelComponent', () => {
  let component: PanelComponent;
  let fixture: ComponentFixture<PanelComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ PanelComponent ]
    });
    fixture = TestBed.createComponent(PanelComponent);
    component = fixture.componentInstance;
    component.contentElement = {
          name: 'John Doe',
          role: 'developer',
          description: 'love programming'
      }
    fixture.detectChanges();
  });

  it('should render contentelement name and role', () => {

      let de = fixture.debugElement.query(By.css('.panel-title'));
      let el: HTMLElement = de.nativeElement;

      expect(el.innerText).toContain('John Doe');
      expect(el.innerText).toContain('developer');
  });

  it('should render contentelement description', () => {

      let de = fixture.debugElement.query(By.css('.panel-body'));
      let el: HTMLElement = de.nativeElement;

      expect(el.innerText).toContain('love programming');
  });
});
