import { Component } from '@angular/core';
import { JobListComponent } from '../job-list/job-list.component';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [JobListComponent],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {

}
