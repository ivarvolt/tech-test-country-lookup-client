import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {map, startWith} from 'rxjs/operators';
import {Observable, of} from 'rxjs';
import {FormControl} from '@angular/forms';
import {MatAutocompleteSelectedEvent} from '@angular/material/autocomplete';
import {SearchBoxAutocomplete} from '../interfaces/search-box-autocomplete';

@Component({
  selector: 'search-box',
  templateUrl: './search-box.component.html',
  styleUrls: ['./search-box.component.scss']
})
export class SearchBoxComponent implements OnInit {

  @Input() searchChoices: SearchBoxAutocomplete[] = [];
  @Output() selection = new EventEmitter();
  searchBoxControl = new FormControl();
  filteredOptions: Observable<SearchBoxAutocomplete[]> = of([]);
  private maxReturnedChoices = 10;
  private minCharsForAutocomplete = 3;

  constructor() { }

  ngOnInit() {
    this.filteredOptions = this.searchBoxControl.valueChanges.pipe(
      startWith(''),
      map(value => value.length >= this.minCharsForAutocomplete ? this.filter(value) : [])
    );
  }

  selectionEmit(event: MatAutocompleteSelectedEvent) {
    this.selection.emit(event.option.value);
    this.searchBoxControl.setValue('');
  }

  private filter(value: string): SearchBoxAutocomplete[] {
    const filterValue = value.toLowerCase();
    const filteredChoices =  this.searchChoices.filter(choice => choice.label.toLowerCase().includes(filterValue));
    return filteredChoices.length > this.maxReturnedChoices ? filteredChoices.splice(0, this.maxReturnedChoices) : filteredChoices;
  }
}
