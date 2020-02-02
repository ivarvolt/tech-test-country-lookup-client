import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CountryLookupComponent } from './country-lookup.component';
import { SearchBoxComponent } from './search-box/search-box.component';
import { CountryInfoCardComponent } from './country-info-card/country-info-card.component';
import { SearchHistoryComponent } from './search-history/search-history.component';
import {SharedModule} from '../common/shared.module';
import {CountryAutoCompleteResolver} from './resolvers/country-autocomplete.resolver';
import {CountryLookupRoutingModule} from './country-lookup-routing.module';



@NgModule({
  declarations: [CountryLookupComponent, SearchBoxComponent, CountryInfoCardComponent, SearchHistoryComponent, SearchHistoryComponent],
  imports: [
    CommonModule,
    CountryLookupRoutingModule,
    SharedModule,
  ],
  providers: [
    CountryAutoCompleteResolver
  ]
})
export class CountryLookupModule { }
