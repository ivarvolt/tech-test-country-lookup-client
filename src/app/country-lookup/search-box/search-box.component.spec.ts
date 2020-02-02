import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchBoxComponent } from './search-box.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {BrowserAnimationsModule, NoopAnimationsModule} from '@angular/platform-browser/animations';
import {DebugElement} from '@angular/core';
import {By} from '@angular/platform-browser';

describe('SearchComponent', () => {
  let component: SearchBoxComponent;
  let fixture: ComponentFixture<SearchBoxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        BrowserAnimationsModule,
        MatFormFieldModule,
        MatInputModule,
        MatAutocompleteModule,
        FormsModule,
        ReactiveFormsModule,
      ],
      declarations: [ SearchBoxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should not crash without any input data', () => {
    expect(component).toBeTruthy();
  });

  it('should have 0 filtered element after inserting 1 characters', async () => {
    setupCodeForTest();
    const searchInput = insertIntoInput('e');

    await component.filteredOptions.subscribe((filtered) => {
      expect(filtered.length).toEqual(0);
    });
  });

  it('should have 1 filtered element after inserting 3 characters', async () => {
    setupCodeForTest();
    const searchInput = insertIntoInput('est');

    await component.filteredOptions.subscribe((filtered) => {
      expect(filtered.length).toEqual(1);
    });
  });

  function setupCodeForTest() {
    component.searchChoices = [{code: 'EE', label: 'Estonia'}, {code: 'PT', label: 'Portugal'}];
    component.ngOnInit();
    fixture.detectChanges();
  }

  function insertIntoInput(insertInputValue: string): DebugElement {
    const searchInput = fixture.debugElement.query(By.css('input'));
    searchInput.nativeElement.value = insertInputValue;
    searchInput.nativeElement.dispatchEvent(new Event('input'));
    fixture.detectChanges();
    return searchInput;
  }
});
