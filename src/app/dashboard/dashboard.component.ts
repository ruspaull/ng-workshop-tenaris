import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { PrettyDatePipe } from '../shared/pretty-date.pipe';

@Component({
  selector: 'wt-dashboard',
  imports: [RouterModule, PrettyDatePipe],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css',
})
export class DashboardComponent {
  title = 'Dashboard';
  description = 'This is the dashboard component.';
  now = new Date();
}
