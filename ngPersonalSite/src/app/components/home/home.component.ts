import { Component } from '@angular/core';
import { AboutSectionComponent } from '../about-section/about-section.component';
import { CarouselComponent } from '../carousel/carousel.component';
import { ContactSectionComponent } from '../contact-section/contact-section.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [AboutSectionComponent, CarouselComponent, ContactSectionComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
