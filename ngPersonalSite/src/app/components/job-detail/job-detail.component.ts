import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Job } from '../../models/job';
import { JobService } from '../../services/job.service';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { NgbActiveModal, NgbModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-job-detail',
  standalone: true,
  imports: [FormsModule, CommonModule, NgbModule, ReactiveFormsModule],
  templateUrl: './job-detail.component.html',
  styleUrl: './job-detail.component.css'
})
export class JobDetailComponent implements OnInit {
  @Input() set job(value: Job) {
    if (value) {
      this.initializeForm(value);
    }
  }
  @Output() close = new EventEmitter<void>();
  @Output() update = new EventEmitter<Job>();

  jobForm!: FormGroup;
  editing = false;

  constructor(
    private jobService: JobService,
    public activeModal: NgbActiveModal,
    private formBuilder: FormBuilder
  ) {}

  ngOnInit(): void {
  }

  private initializeForm(job: Job): void {
    // Make sure to provide default values if job properties can be null
    this.jobForm = this.formBuilder.group({
      company: [job.company, Validators.required],
      title: [job.title, Validators.required],
      firstName: [job.firstName, Validators.required],
      lastName: [job.lastName, Validators.required],
      email: [job.email, Validators.required],
      phoneNumber: [job.phoneNumber, Validators.required],
      description: [job.description, Validators.required],
      technologies: [job.technologies, Validators.required],
    });

    // Initially, disable the form if not in editing mode
    if (!this.editing) {
      this.jobForm.disable();
    }
  }

  toggleEdit(): void {
    this.editing = !this.editing;
    if (this.editing) {
      this.jobForm.enable();
    } else {
      this.jobForm.disable();
    }
  }

  onSubmit(event?: Event): void {
    if (event) {
      event.preventDefault();
    }
    if (this.jobForm.valid) {
      const updatedJob: Job = {
        ...this.job,
        ...this.jobForm.value,
      };
      // Call the service to update the job and handle the result
      this.jobService.updateJob(updatedJob).subscribe({
        next: (job) => {
          this.update.emit(job);
          this.editing = false;
          this.activeModal.close();
          this.update.emit({ ...this.job, ...this.jobForm.value });
        },
        error: (err) => console.error('Failed to update job', err),
      });
    }
  }

  cancel(): void {
    this.jobForm.reset(this.job);
    this.editing = false;
    this.jobForm.disable();
    this.activeModal.dismiss();
  }

  closeDetails(): void {
    this.activeModal.dismiss();
  }
}
