import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-sorting-movies-actions',
  templateUrl: './sorting-movies-actions.component.html',
  styleUrls: ['./sorting-movies-actions.component.scss']
})
export class SortingMoviesActionsComponent {
  @Output() sortCriteriaEmiter = new EventEmitter<{ criteria: string, direction: string }>();
  currentSortCriteria: string = '';
  currentSortDirection: string = 'asc';

  constructor() {
  }

  onSort(criteria: string) {
    if (this.currentSortCriteria === criteria) {
      this.currentSortDirection = this.currentSortDirection === 'asc' ? 'desc' : 'asc';
    } else {
      this.currentSortCriteria = criteria;
      this.currentSortDirection = 'asc';
    }
    this.sortCriteriaEmiter.emit({ criteria: criteria, direction: this.currentSortDirection });
  }

  get sortCriteria(): string {
    return `${this.currentSortCriteria}${this.currentSortDirection.charAt(0).toUpperCase() + this.currentSortDirection.slice(1)}`;
  }

}
