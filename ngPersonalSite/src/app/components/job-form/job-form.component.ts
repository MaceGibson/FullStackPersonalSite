import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Job } from '../../models/job';
import { JobService } from '../../services/job.service';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

declare var bootstrap: any;

@Component({
  selector: 'app-job-form',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  templateUrl: './job-form.component.html',
  styleUrl: './job-form.component.css'
})
export class JobFormComponent implements OnInit {
  jobForm: FormGroup = this.fb.group({
    company: ['', Validators.required],
    title: ['', Validators.required],
    firstName: ['', Validators.required],
    lastName: ['', Validators.required],
    email: ['', [Validators.required, Validators.email]],
    phoneNumber: [''],
    description: [''],
    technologies: [''],
  });

  ngOnInit(): void {}

  constructor(private fb: FormBuilder, private jobService: JobService, private router: Router) {
  }

  onSubmit() {
    if (this.jobForm.valid) {
      const newJob: Job = { ...this.jobForm.value };
      this.jobService.createJob(newJob).subscribe({
        next: (job) => {
          this.showSuccessToast();
          setTimeout(() => this.router.navigate(['/']), 2000); // Navigate after 2 seconds
        },
        error: (err) => {
          console.error('Job creation failed:', err);
          this.showErrorToast();
        }
      });
    }
  }

  showSuccessToast() {
    const toastElement = document.getElementById('liveToast');
    const toast = new bootstrap.Toast(toastElement);
    toast.show(); // Show toast
  }

  showErrorToast() {
    const toastBody = document.querySelector('.toast-body');
    if (toastBody) {
      toastBody.textContent = 'There was a problem sending your post.';
      const toastElement = document.getElementById('liveToast');
      const toast = new bootstrap.Toast(toastElement);
      toast.show(); // Show toast
    } else {
      console.error('Toast body element not found');
    }
  }

}
