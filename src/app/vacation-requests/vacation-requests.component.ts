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

  toggleSelectAll() {
    if (this.selectedItems.size === this.filteredData().length) {
      this.selectedItems.clear(); // إلغاء تحديد كل العناصر
    } else {
      this.filteredData().forEach((item) => this.selectedItems.add(item.name)); // تحديد كل العناصر
    }
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

  toggleSelection(itemName: string): void {
    if (this.selectedItems.has(itemName)) {
      this.selectedItems.delete(itemName);
    } else {
      this.selectedItems.add(itemName);
    }
  }

  toggleSelectItem(itemName: string) {
    if (this.selectedItems.has(itemName)) {
      this.selectedItems.delete(itemName); // إذا كانت العنصر محددًا، قم بإزالته
    } else {
      this.selectedItems.add(itemName); // إذا لم يكن محددًا، أضفه
    }
  }

  parseSalary(salary: string): number {
    return parseFloat(salary) || 0; // إذا كانت القيمة غير قابلة للتحويل إلى رقم، يتم إرجاع 0
  }

  // دالة لحساب الصفحات التي ستظهر (إظهار 3 صفحات في كل مرة)
  getDisplayedPages(): number[] {
    const totalVisiblePages = 3; // عدد الصفحات المعروضة
    let startPage: number;
    let endPage: number;

    // إذا كانت الصفحة الحالية قريبة من البداية، نعرض الصفحات الأولى
    if (this.currentPage <= Math.floor(totalVisiblePages / 2)) {
      startPage = 1;
      endPage = Math.min(totalVisiblePages, this.totalPages);
    }
    // إذا كانت الصفحة الحالية قريبة من النهاية، نعرض الصفحات الأخيرة
    else if (
      this.currentPage + Math.floor(totalVisiblePages / 2) >=
      this.totalPages
    ) {
      endPage = this.totalPages;
      startPage = Math.max(this.totalPages - totalVisiblePages + 1, 1);
    }
    // نعرض الصفحات من الوسط بناءً على الصفحة الحالية
    else {
      startPage = this.currentPage - Math.floor(totalVisiblePages / 2);
      endPage = this.currentPage + Math.floor(totalVisiblePages / 2);
    }

    const pages = [];
    for (let i = startPage; i <= endPage; i++) {
      pages.push(i);
    }
    return pages;
  }

  // تحميل صفحة معينة
  loadPage(page: number): void {
    if (page >= 1 && page <= this.totalPages) {
      this.currentPage = page;
    }
  }

  // الذهاب إلى الصفحة السابقة
  goToPreviousPage(): void {
    if (this.currentPage > 1) {
      this.loadPage(this.currentPage - 1);
    }
  }

  // الذهاب إلى الصفحة التالية
  goToNextPage(): void {
    if (this.currentPage < this.totalPages) {
      this.loadPage(this.currentPage + 1);
    }
  }
}

interface Item {
  name: string;
  date: string;
  duration: string;
  salary: string;
}
