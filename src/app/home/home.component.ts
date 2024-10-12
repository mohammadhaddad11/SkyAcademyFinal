import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { DataService } from '../shared/data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  standalone: true,
  imports: [RouterModule],
})
export class HomeComponent implements OnInit {
  data: any[] = [];
  constructor(private dataService: DataService) {}

  ngOnInit(): void {
    this.data = this.dataService.data;
    this.showInitialData();
  }

  displayDataonlythree(dataToDisplay: any[]): void {
    const pageContent = document.getElementById(
      'VacationRequestsData'
    ) as HTMLElement;
    if (pageContent) {
      pageContent.innerHTML = '';

      dataToDisplay.forEach((item) => {
        const card = document.createElement('div');
        card.className = 'col-md-6 col-lg-3 pb-4';
        card.innerHTML = `
          <div class="card">
            <div class="d-flex flex-column">
              <div class="id d-flex align-items-center flex-column">
                <img src="assets/img/avatar.png" alt="avatar" class="mb-1" />
                <h4>${item.name}</h4>
              </div>
              <div class="info ms-4 mb-4">
                <div class="mb-2">
                  <p class="header">Submitted on:</p>
                  <p>${item.date}</p>
                </div>
                <div>
                  <p class="header">Duration:</p>
                  <p>${item.duration}</p>
                </div>
                <div class="mt-2">
                  <p class="header">Salary:</p>
                  <p>${item.salary}</p>
                </div>
              </div>
            </div>
            <div class="d-flex flex-row justify-content-evenly">
              <button class="btn btn-decline">Decline</button>
              <button class="btn btn-approve text-white">Approve</button>
            </div>
          </div>
        `;
        pageContent.appendChild(card);
      });
    }
  }

  searchFunction(event: Event): void {
    const searchTerm = (event.target as HTMLInputElement).value.toLowerCase();
    const filteredData = this.data.filter((item) =>
      item.name.toLowerCase().includes(searchTerm)
    );
    const firstThreeResults = filteredData.slice(0, 3);
    this.displayDataonlythree(firstThreeResults);
  }

  showInitialData(): void {
    this.displayDataonlythree(this.data.slice(0, 3));
  }
}
