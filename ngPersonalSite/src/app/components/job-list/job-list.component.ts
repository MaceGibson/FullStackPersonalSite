import { Component, OnInit } from '@angular/core';
import { Job } from '../../models/job';
import { JobService } from '../../services/job.service';
import { CommonModule } from '@angular/common';
import { NgbModal, NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { JobDetailComponent } from '../job-detail/job-detail.component';

@Component({
  selector: 'app-job-list',
  standalone: true,
  imports: [CommonModule, NgbModule, JobDetailComponent],
  templateUrl: './job-list.component.html',
  styleUrl: './job-list.component.css'
})
export class JobListComponent implements OnInit {
  jobs: Job[] = [];
  selectedJob: Job | null = null;

  constructor(private jobService: JobService, private modalService: NgbModal) {}

  ngOnInit(): void {
    this.retrieveJobs();
  }

  retrieveJobs(): void {
    this.jobService.getJobsForUser().subscribe({
      next: (jobs) => (this.jobs = jobs),
      error: (err) => console.error('Failed to get jobs', err)
    });
  }

  onDelete(jobId: number): void {
    this.jobService.deleteJob(jobId).subscribe({
      next: () => this.jobs = this.jobs.filter(job => job.id !== jobId),
      error: (err) => console.error('Failed to delete job', err)
    });
  }

  onViewDetails(job: Job, event: MouseEvent): void {
    event.preventDefault();
    const modalRef = this.modalService.open(JobDetailComponent);
    modalRef.componentInstance.job = job; // Pass the selected job to the modal

    modalRef.result.then(
      (result) => {
        if (result === 'save') {
          this.onJobUpdated(result);
        }
      },
      (reason) => {
        if (reason === 'cancel') {
          // Handle cancel action if needed
        }
      }
    );
  }

  onDetailsClosed(): void {
    this.selectedJob = null;
    // Hide the modal
  }

  onJobUpdated(updatedJob: Job): void {
    const index = this.jobs.findIndex(job => job.id === updatedJob.id);
    if (index !== -1) {
      this.jobs[index] = updatedJob;
    }
    // Hide the modal
    this.onDetailsClosed();
  }
}
