import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { faArrowUpRightDots } from '@fortawesome/free-solid-svg-icons';
interface Vacation {
  name: string;
  date: string;
  duration: string;
  approvedBy: string;
}

interface PendingData {
  name: string;
  date: string;
  duration: string;
  salary: string;
}

@Component({
  selector: 'app-profiles',
  templateUrl: './profiles.component.html',
  styleUrls: ['./profiles.component.css'],
  standalone: true,
  imports: [RouterModule, FontAwesomeModule],
})
export class ProfilesComponent implements OnInit {
  user = faUser;
  arrowDots = faArrowUpRightDots;
  HistoryData: Vacation[] = [
    {
      name: 'Annual Vacation',
      date: '1/1/2024 - 8/1/2024',
      duration: '8 days',
      approvedBy: 'Approved by: Ahmad Khaled',
    },
    {
      name: 'Sick Vacation',
      date: '15/2/2024 - 22/2/2024',
      duration: '8 days',
      approvedBy: 'Approved by: Sara Ali',
    },
    {
      name: 'Non Paid Vacation',
      date: '1/3/2024 - 8/3/2024',
      duration: '8 days',
      approvedBy: 'Approved by: Khaled Zaid',
    },
    {
      name: 'Annual Vacation',
      date: '15/4/2024 - 22/4/2024',
      duration: '8 days',
      approvedBy: 'Approved by: Mona Saleh',
    },
    {
      name: 'Sick Vacation',
      date: '1/5/2024 - 8/5/2024',
      duration: '8 days',
      approvedBy: 'Approved by: Yazan Fawzi',
    },
    {
      name: 'Non Paid Vacation',
      date: '15/6/2024 - 22/6/2024',
      duration: '8 days',
      approvedBy: 'Approved by: Nadia Sami',
    },
  ];

  PendingData: PendingData[] = [
    {
      name: 'Ali Kamal',
      date: '5/3/2024',
      duration: '1 Week (10/4/2023 - 17/4/2023)',
      salary: '500 AED',
    },
    {
      name: 'Sara Ahmed',
      date: '10/3/2024',
      duration: '3 Weeks (20/4/2023 - 11/5/2023)',
      salary: '1500 AED',
    },
    {
      name: 'Fatima Ali',
      date: '15/3/2024',
      duration: '1 Week (25/4/2023 - 2/5/2023)',
      salary: '500 AED',
    },
    {
      name: 'Omar Zaki',
      date: '20/3/2024',
      duration: '2 Weeks (30/4/2023 - 14/5/2023)',
      salary: '1000 AED',
    },
    {
      name: 'Yasmin Omar',
      date: '25/3/2024',
      duration: '2 Weeks (5/5/2023 - 19/5/2023)',
      salary: '1000 AED',
    },
    {
      name: 'Hassan Khaled',
      date: '30/3/2024',
      duration: '1 Week (10/5/2023 - 17/5/2023)',
      salary: '500 AED',
    },
    {
      name: 'Lina Mohamed',
      date: '5/4/2024',
      duration: '2 Weeks (15/5/2023 - 29/5/2023)',
      salary: '1000 AED',
    },
    {
      name: 'Rami Nader',
      date: '10/4/2024',
      duration: '3 Weeks (20/5/2023 - 10/6/2023)',
      salary: '1500 AED',
    },
    {
      name: 'Khaled Youssef',
      date: '15/4/2024',
      duration: '1 Week (25/5/2023 - 1/6/2023)',
      salary: '500 AED',
    },
    {
      name: 'Mona Samir',
      date: '20/4/2024',
      duration: '2 Weeks (30/5/2023 - 13/6/2023)',
      salary: '1000 AED',
    },
  ];

  constructor() {}

  ngOnInit(): void {
    this.displayDataonlythree(this.HistoryData);
    this.displayDataonlythreePendingData(this.PendingData.slice(0, 3));
  }

  displayDataonlythree(dataToDisplay: Vacation[]): void {
    const pageContent = document.getElementById('HistoryData');
    if (pageContent) {
      pageContent.innerHTML = '';
      dataToDisplay.forEach((item) => {
        const card = document.createElement('div');
        card.className = 'col-md-3 py-4';
        card.innerHTML = `
          <div class="card">
            <div class="d-flex flex-column">
              <div class="d-flex">
                <h4>${item.name}</h4>
              </div>
              <div class="info ms-4">
                <div class="mb-2">
                  <p>${item.date}</p>
                </div>
                <div>
                  <p>${item.duration}</p>
                </div>
                <div class="mt-2">
                  <p>${item.approvedBy}</p>
                </div>
              </div>
            </div>
          </div>
        `;
        pageContent.appendChild(card);
      });
    }
  }

  displayDataonlythreePendingData(dataToDisplay: PendingData[]): void {
    const pageContent = document.getElementById('PendingData');
    if (pageContent) {
      pageContent.innerHTML = '';
      dataToDisplay.forEach((item) => {
        const card = document.createElement('div');
        card.className = 'col-md-4 pb-4';
        card.innerHTML = `
          <div class="card">
            <div class="d-flex flex-column">
              <div class="id d-flex align-items-center flex-column">
                <img src="assets/img/avatar.png" alt="avatar" class="mb-1" />
                <h4>${item.name}</h4>
              </div>
              <div class="info ms-4">
                <div class="mb-2">
                  <p class="header">Submitted on:</p>
                  <p>${item.date}</p>
                </div>
                <div>
                  <p class="header">Duration:</p>
                  <p>${item.duration}</p>
                </div>
                <div class="mt-2">
                  <p class="header">Currently at:</p>
                  <p style="color: green; font-weight: bold;">Omar Ababneh</p>
                </div>
              </div>
            </div>
          </div>
        `;
        pageContent.appendChild(card);
      });
    }
  }
}
