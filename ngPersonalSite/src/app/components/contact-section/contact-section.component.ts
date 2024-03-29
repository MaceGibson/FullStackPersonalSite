import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink, RouterModule } from '@angular/router';
import { NgbModal, NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { LoginComponent } from '../login/login.component';
import { LogoutComponent } from '../logout/logout.component';
import { AuthService } from '../../services/auth.service';
import { JobFormComponent } from '../job-form/job-form.component';

@Component({
  selector: 'app-contact-section',
  standalone: true,
  imports: [RouterLink, RouterModule, NgbModule, CommonModule, LoginComponent, LogoutComponent, JobFormComponent],
  templateUrl: './contact-section.component.html',
  styleUrl: './contact-section.component.css'
})
export class ContactSectionComponent {
  showLoginForm = false;

  constructor(private authService: AuthService, private modalService: NgbModal){}

  isLoggedIn(): boolean {
    return this.authService.checkLogin();
  }

  toggleLoginForm(show: boolean): void{
    this.showLoginForm = show;
  }

  openContactModal() {
    const modalRef = this.modalService.open(JobFormComponent, { size: 'lg' });

    modalRef.result.then(
      (result) => {
      },
      (dismissReason) => {
      }
    );
  }

}
