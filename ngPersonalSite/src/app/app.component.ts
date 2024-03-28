import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AboutSectionComponent } from './components/about-section/about-section.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, AboutSectionComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'ngPersonalSite';
}
