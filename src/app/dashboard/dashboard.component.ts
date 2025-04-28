import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { UsersListComponent } from '../users/users-list/users-list.component';

@Component({
  selector: 'wt-dashboard',
  imports: [RouterModule, ButtonModule, UsersListComponent],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css',
})
export class DashboardComponent {}
