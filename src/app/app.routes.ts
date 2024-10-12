import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProfilesComponent } from './profiles/profiles.component';

export const routes: Routes = [
  { path: '', component: HomeComponent }, // الصفحة الرئيسية
  {
    path: 'profiles',
    loadComponent: () =>
      import('./profiles/profiles.component').then((m) => m.ProfilesComponent),
  },
  {
    path: 'requests',
    loadComponent: () =>
      import('./vacation-requests/vacation-requests.component').then(
        (m) => m.VacationRequests
      ),
  },
];
