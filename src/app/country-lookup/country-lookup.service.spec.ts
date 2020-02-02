import {getTestBed, TestBed} from '@angular/core/testing';

import { CountryLookupService } from './country-lookup.service';
import {HttpClientTestingModule, HttpTestingController} from '@angular/common/http/testing';

describe('CountryLookupService', () => {
  let injector: TestBed;
  let service: CountryLookupService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ HttpClientTestingModule ]
    });
    injector = getTestBed();
    service = injector.get(CountryLookupService);
    httpMock = injector.get(HttpTestingController);
  });

  it('should call all countries with name and iso code filter', () => {
    service.getCountryAutocompleteData().subscribe();

    const req = httpMock.expectOne('https://restcountries.eu/rest/v2/all?fields=name;alpha2Code');
    expect(req.request.method).toBe('GET');
  });

  it('should search country returning flag;name;currencies;latlng;area dataset', () => {
    let countryName = 'Estonia';
    service.getCountryByFullName(countryName).subscribe();

    const req = httpMock.expectOne(`https://restcountries.eu/rest/v2/name/${countryName}?fullText=true&fields=flag;name;currencies;latlng;area`);
    expect(req.request.method).toBe('GET');
  });
});
