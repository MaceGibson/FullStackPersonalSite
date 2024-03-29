import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink, RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { LoginComponent } from '../login/login.component';
import { LogoutComponent } from '../logout/logout.component';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-contact-section',
  standalone: true,
  imports: [RouterLink, RouterModule, NgbModule, CommonModule, LoginComponent, LogoutComponent],
  templateUrl: './contact-section.component.html',
  styleUrl: './contact-section.component.css'
})
export class ContactSectionComponent {
  showLoginForm = false;

  constructor(private authService: AuthService){}

  isLoggedIn(): boolean {
    return this.authService.checkLogin();
  }

  toggleLoginForm(show: boolean): void{
    this.showLoginForm = show;
  }

}
