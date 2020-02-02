import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchHistoryComponent } from './search-history.component';
import {MatListModule} from '@angular/material/list';
import {By} from '@angular/platform-browser';

describe('SearchHistoryComponent', () => {
  let component: SearchHistoryComponent;
  let fixture: ComponentFixture<SearchHistoryComponent>;
  const testSearchHistoryData = ['Estonia', 'Portugal', 'Australia'];

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        MatListModule
      ],
      declarations: [ SearchHistoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchHistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should not crash without data', () => {
    expect(component).toBeTruthy();
  });

  it('should contain 3 list elements', () => {
    component.searchHistory = testSearchHistoryData;
    fixture.detectChanges();
    const listItems = fixture.debugElement.queryAll(By.css('mat-list-item'));
    expect(listItems.length).toEqual(3);
  });

  it('should send output event on list-item click', () => {
    component.searchHistory = testSearchHistoryData;
    fixture.detectChanges();
    const spy = spyOn(component.clickedHistory, 'emit');
    const listItem = fixture.debugElement.query(By.css('mat-list-item'));
    listItem.triggerEventHandler('click', {});

    expect(spy).toHaveBeenCalledTimes(1);
  });
});
