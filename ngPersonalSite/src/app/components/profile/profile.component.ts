import { Component } from '@angular/core';
import { DashboardComponent } from '../dashboard/dashboard.component';
import { ContactSectionComponent } from '../contact-section/contact-section.component';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [DashboardComponent, ContactSectionComponent],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css'
})
export class ProfileComponent {

}
