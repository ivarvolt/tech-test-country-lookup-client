import { Injectable } from '@angular/core';
import {Observable, of} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {RestCountriesResponse} from './interfaces/rest-countries-response';
import {first, map} from 'rxjs/operators';
import {SearchBoxAutocomplete} from './interfaces/search-box-autocomplete';

@Injectable({
  providedIn: 'root'
})
export class CountryLookupService {

  private API_URL = 'https://restcountries.eu/rest';

  constructor(private httpClient: HttpClient) { }

  getCountryAutocompleteData(): Observable<SearchBoxAutocomplete[]> {
    const url = `${this.API_URL}/v2/all?fields=name;alpha2Code`;
    return this.httpClient.get<RestCountriesResponse[]>(url).pipe(
      map(countries => {
        return countries.map(country => {
          return {
            'code': country.alpha2Code,
            'label': country.name
          } as SearchBoxAutocomplete;
        });
      })
    );
  }

  getCountryByFullName(countryName: string): Observable<RestCountriesResponse> {
    const url = `${this.API_URL}/v2/name/${countryName}?fullText=true&fields=flag;name;currencies;latlng;area`;
    return this.httpClient.get<RestCountriesResponse[]>(url).pipe(
      map((countries) => {
        return countries.length > 0 ? countries[0] : {} as RestCountriesResponse;
      })
    );
  }
}
