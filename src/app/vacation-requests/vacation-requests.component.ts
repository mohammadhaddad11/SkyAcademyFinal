import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { HighlightPipe } from '../highlight.pipe';
import { DataService } from '../shared/data.service';
@Component({
  selector: 'app-vacation-requests',
  standalone: true,
  imports: [FormsModule, FontAwesomeModule, HighlightPipe, CommonModule],
  templateUrl: './vacation-requests.component.html',
  styleUrls: ['./vacation-requests.component.css'],
})
export class VacationRequests {
  searchTerm: string = '';
  MagnifyingGlass = faMagnifyingGlass;
  itemsPerPage: number = 6;
  currentPage: number = 1; // Used for pagination display
  selectedItems: Set<string> = new Set();
  data: any[] = [];
  constructor(private dataService: DataService) {}

  get totalPages(): number {
    return Math.ceil(this.filteredData().length / this.itemsPerPage);
  }

  filteredData(): Item[] {
    if (this.searchTerm === '') {
      return this.data;
    }
    return this.data.filter((item) =>
      item.name.toLowerCase().includes(this.searchTerm.toLowerCase())
    );
  }

  toggleSelectAll(): void {
    const selectAllCheckbox = document.getElementById(
      'select-all'
    ) as HTMLInputElement;
    const allNames = this.filteredData().map((item) => item.name);

    if (selectAllCheckbox?.checked) {
      allNames.forEach((name) => this.selectedItems.add(name));
    } else {
      allNames.forEach((name) => this.selectedItems.delete(name));
    }
  }

  loadPage(page: number): void {
    this.currentPage = page;
  }

  handleApprove(name: string): void {
    console.log(`Approved request for: ${name}`);
  }

  handleDecline(name: string): void {
    console.log(`Declined request for: ${name}`);
  }

  ngOnInit(): void {
    this.data = this.dataService.data;
    this.loadPage(1);
  }
}

interface Item {
  name: string;
  date: string;
  duration: string;
  salary: string;
}
