import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { User } from '../../models/user';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, RouterLink],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  loginUser: User = new User();

  @Output() close: EventEmitter<void> = new EventEmitter<void>();

    constructor(private authService: AuthService, private router: Router) {}

    login(user: User): void {
      console.log('Login attempt:', this.loginUser);
      this.authService.login(user.username, user.password).subscribe({
        next: (loggedInUser) => {
          this.router.navigateByUrl('/profile');
          this.close.emit();
        },
        error: (failedLogin) => {
          console.error('Login failed.');
          console.error(failedLogin);
        },
      });
    }
}
