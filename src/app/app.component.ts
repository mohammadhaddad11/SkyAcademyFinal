import { Component } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { VacationRequests } from './vacation-requests/vacation-requests.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, VacationRequests, RouterModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'SkyAcademyTask';
}
