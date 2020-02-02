import {RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';
import {CountryLookupComponent} from './country-lookup.component';
import {CountryAutoCompleteResolver} from './resolvers/country-autocomplete.resolver';


const routes: Routes = [
  {
    path: '',
    component: CountryLookupComponent,
    resolve: {
      autocomplete: CountryAutoCompleteResolver
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: []
})
export class CountryLookupRoutingModule {
}
