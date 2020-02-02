import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from '@angular/router';
import {Observable} from 'rxjs';
import {CountryLookupService} from '../country-lookup.service';
import {SearchBoxAutocomplete} from '../interfaces/search-box-autocomplete';


@Injectable()
export class CountryAutoCompleteResolver implements Resolve<SearchBoxAutocomplete[]> {

  constructor(private countryLookupService: CountryLookupService) {
  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot):
    Observable<SearchBoxAutocomplete[]> | Promise<SearchBoxAutocomplete[]> | SearchBoxAutocomplete[] {
    return this.countryLookupService.getCountryAutocompleteData();
  }
}
