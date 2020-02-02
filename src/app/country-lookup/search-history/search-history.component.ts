import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'search-history',
  templateUrl: './search-history.component.html',
  styleUrls: ['./search-history.component.scss']
})
export class SearchHistoryComponent implements OnInit {

  @Input() searchHistory: string[];
  @Output() clickedHistory = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

}
