import {Component, Input, OnInit} from '@angular/core';
import {RestCountriesResponse} from '../interfaces/rest-countries-response';

@Component({
  selector: 'country-info-card',
  templateUrl: './country-info-card.component.html',
  styleUrls: ['./country-info-card.component.scss']
})
export class CountryInfoCardComponent implements OnInit {

  @Input() countryInfo: RestCountriesResponse;

  constructor() { }

  ngOnInit() {
  }

}
