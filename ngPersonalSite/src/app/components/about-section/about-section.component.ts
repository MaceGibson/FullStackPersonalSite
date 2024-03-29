import { Component } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-about-section',
  standalone: true,
  imports: [NgbModule, FormsModule, CommonModule],
  templateUrl: './about-section.component.html',
  styleUrls: ['./about-section.component.css']
})
export class AboutSectionComponent {

  projects = [
    {
      thumbnail: 'assets/lessontracker.jpg',
      title: 'LessonTracker',
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
  ];

  experiences = [
    {
      thumbnail: 'assets/sd-logo.jpg',
      role: 'Java Full-Stack Bootcamp Graduate',
      place: 'Skill Distillery',
      date: 'Nov 2023 - Present',
      description: 'Designed and implemented Java full-stack applications using Spring Boot, SQL, JPA, JavaScript, Angular, REST, JSON, AJAX.  Using agile methods and technologies.'
    },
    {
      thumbnail: 'assets/us-bank-logo.jpg',
      role: 'Software Security Support Analyst',
      place: 'U.S. Bank',
      date: 'Aug 2019 - Nov 2023',
      description: 'Monitored and addressed client e-commerce technical issues. Provided software solutions using proprietary APIs. Produced work procedures and software solutions for newly created Software Security team.'
    },
    {
      thumbnail: 'assets/usmc.png',
      role: 'MLS and Telecommunications Administrator',
      place: 'United States Marine Corps',
      date: 'Jun 2017 - Jul 2018',
      description: 'Tactical switching operator, installed and maintained telecommunication infrastructure.'
    }
  ];

  educations = [
    {
      thumbnail: 'assets/sd-logo.jpg',
      degree: 'Certificate Java Full-Stack Development',
      institution: 'Skill Distillery',
      date: 'Nov 2023 - Present',
      description: 'Intensive bootcamp focusing on full-stack development with Java, including Spring Boot, SQL, and Angular. Applied hands-on experience with Agile methodologies and Test Driven Development (TDD).'
    },
    {
      thumbnail: 'assets/southcollege.jpg',
      degree: 'Bachelor of Science - BS',
      institution: 'South College',
      date: 'Graduation Year: 2023',
      description: 'Received a BS in Information Technology. Coursework focused on areas such as project management, agile methodologies, JavaScript, Java, and business ethics. Additionally, developed soft skills like communication and time management.'
    }
  ];

}
