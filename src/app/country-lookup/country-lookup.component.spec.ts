import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CountryLookupComponent } from './country-lookup.component';
import {of} from 'rxjs';

describe('CountryLookupComponent', () => {
  let component: CountryLookupComponent;
  const mockActivatedRoute = { } as any;
  const mockCountryLookupService = { getCountryByFullName: jest.fn() } as any;

  beforeEach(() => {
    component = new CountryLookupComponent(mockActivatedRoute, mockCountryLookupService);
  });

  it('should add to selection history on setSelection', () => {
    spyOn(mockCountryLookupService, 'getCountryByFullName').and.returnValue(of({}));
    let selectedCountryFullName = 'Estonia';
    component.setSelection(selectedCountryFullName);
    expect(component.searchHistory.length).toEqual(1);
    expect(component.searchHistory[0]).toEqual(selectedCountryFullName);
  });

  it('should call getCountryByFullName on setSelection', () => {
    const serviceSpy = spyOn(mockCountryLookupService, 'getCountryByFullName').and.returnValue(of({}));
    component.setSelection('Estonia');
    expect(serviceSpy).toHaveBeenCalledTimes(1);
  });
});
