import { Component } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { VacationRequests } from './vacation-requests/vacation-requests.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { faBell } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, VacationRequests, RouterModule, FontAwesomeModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'SkyAcademyTask';
  bars = faBars;
  user = faUser;
  bell = faBell;
}
