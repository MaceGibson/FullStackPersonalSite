import { Component } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ProjectTileComponent } from '../project-tile/project-tile.component';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-about-section',
  standalone: true,
  imports: [NgbModule, ProjectTileComponent, FormsModule, CommonModule],
  templateUrl: './about-section.component.html',
  styleUrls: ['./about-section.component.css']
})
export class AboutSectionComponent {

  projects = [
    {
      thumbnail: 'assets/lessontracker.jpg',
      title: 'LessonTracker Tool',
      description: 'Application to track lessons that need reviewing.',
      technologies: ['Java', 'Spring Boot', 'Spring Data', 'SQL', 'REST', 'DOM', 'AJAX', 'XHR', 'JSON', 'Javascript', 'Typescript', 'Angular',  'HTML', 'Bootstrap', 'Figma', 'Agile']
    },
    {
       thumbnail: 'assets/whatareyoudoing.jpg',
       title: 'WhatAreYouDoing',
       description: 'Application to track a user list of things to accomplish or remember.',
       technologies: ['Java', 'Spring Boot', 'Spring Data', 'SQL', 'REST', 'DOM', 'AJAX', 'XHR', 'JSON', 'Javascript', 'Typescript', 'Angular',  'HTML', 'Bootstrap', 'Figma', 'Agile']
    },
    {
      thumbnail: 'assets/ratemystudent.jpg',
      title: 'RateMyStudent',
      description: 'A site where teachers can review students.',
      technologies: ['Java', 'Spring Boot', 'Spring Data', 'SQL', 'REST', 'DOM', 'AJAX', 'XHR', 'JSON', 'Javascript', 'Typescript', 'Angular',  'HTML', 'Bootstrap', 'Figma', 'Agile']
    },
    {
      thumbnail: 'assets/dreamscape.jpg',
      title: 'Dreamscape',
      description: 'Application where user can create a visionboard.',
      technologies: ['Java', 'Spring Boot', 'Spring Data', 'SQL', 'REST', 'DOM', 'AJAX', 'XHR', 'JSON', 'Javascript', 'Typescript', 'Angular',  'HTML', 'Bootstrap', 'Figma', 'Agile']
    }
  ]

}
