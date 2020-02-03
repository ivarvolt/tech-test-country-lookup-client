import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CountryInfoCardComponent } from './country-info-card.component';
import {MatCardModule} from '@angular/material/card';
import {MatDividerModule} from '@angular/material/divider';
import {RestCountriesResponse} from '../interfaces/rest-countries-response';
import {By} from '@angular/platform-browser';

describe('CountryInfoCardComponent', () => {
  let component: CountryInfoCardComponent;
  let fixture: ComponentFixture<CountryInfoCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        MatCardModule,
        MatDividerModule
      ],
      declarations: [ CountryInfoCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CountryInfoCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should not error without initialization data', () => {
    component.countryInfo = {} as RestCountriesResponse;
    fixture.detectChanges();
    expect(component).toBeTruthy();
  });

  it('should show full card data', () => {
    component.countryInfo = {
      "currencies":[{"code":"EUR","name":"Euro","symbol":"€"}],
      "flag":"https://restcountries.eu/data/est.svg",
      "name":"Estonia",
      "latlng":[59.0,26.0],
      "area":45227.0
    } as RestCountriesResponse;

    fixture.detectChanges();

    const matCardTitleEl = fixture.debugElement.query(By.css('mat-card-title'));
    const imgEl = fixture.debugElement.query(By.css('img'));
    const currencyEl = fixture.debugElement.query(By.css('#currency'));
    const latEl = fixture.debugElement.query(By.css('#lat'));
    const lngEl = fixture.debugElement.query(By.css('#lng'));
    const areaEl = fixture.debugElement.query(By.css('#area'));

    expect(matCardTitleEl.nativeElement.textContent.trim()).toEqual('Estonia');
    expect(imgEl.nativeElement.getAttribute('src')).toBeDefined();
    expect(currencyEl.nativeElement.textContent.trim()).toEqual('Currency: Euro');
    expect(latEl.nativeElement.textContent.trim()).toEqual('Latitude: 59');
    expect(lngEl.nativeElement.textContent.trim()).toEqual('Longitude: 26');
    expect(areaEl.nativeElement.textContent.trim()).toEqual('Area size: 45227 km2');
  });
});
