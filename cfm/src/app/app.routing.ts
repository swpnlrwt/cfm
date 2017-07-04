import {ModuleWithProviders} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {DashboardComponent} from './dashboard/dashboard.component';
import {ProjectsComponent} from './projects/projects.component';

const routes: Routes = [
   { path: 'dashboard', component: DashboardComponent },
   { path: 'projects', component: ProjectsComponent },
  { path: '**', redirectTo: 'dashboard', pathMatch: 'full' }
];

export const routing: ModuleWithProviders = RouterModule.forChild(routes);



