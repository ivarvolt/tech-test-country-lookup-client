import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {CountryLookupService} from './country-lookup.service';
import {RestCountriesResponse} from './interfaces/rest-countries-response';
import {SearchBoxAutocomplete} from './interfaces/search-box-autocomplete';

@Component({
  selector: 'country-lookup',
  templateUrl: './country-lookup.component.html',
  styleUrls: ['./country-lookup.component.scss']
})
export class CountryLookupComponent implements OnInit {
  searchChoices: SearchBoxAutocomplete[] = [];
  selectedCountryInfo: RestCountriesResponse;
  searchHistory: string[] = [];

  constructor(private route: ActivatedRoute, private countryLookupService: CountryLookupService) { }

  ngOnInit() {
    this.searchChoices = this.route.snapshot.data['autocomplete'] as SearchBoxAutocomplete[];
  }

  setSelection(selectedCountryFullName: string) {
    this.updateSearchHistory(selectedCountryFullName);
    this.countryLookupService.getCountryByFullName(selectedCountryFullName).subscribe((country) => {
      this.selectedCountryInfo = country;
    });
  }

  private updateSearchHistory(selectedCountryFullName: string) {
    this.searchHistory = this.searchHistory.filter((item) => item !== selectedCountryFullName);
    this.searchHistory.unshift(selectedCountryFullName);
  }
}
