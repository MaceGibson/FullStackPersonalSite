import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, catchError, throwError } from 'rxjs';
import { Job } from '../models/job';

@Injectable({
  providedIn: 'root'
})
export class JobService {
  private url = environment.baseUrl + 'api/jobs';

  constructor(private http: HttpClient) { }

  public createJob(job: Job): Observable<Job> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };
    return this.http.post<Job>(`${this.url}/create`, job, httpOptions).pipe(
      catchError((err) => this.handleError(err))
    );
  }

  public getJobsForUser(): Observable<Job[]> {
    // GET request to /api/jobs to list all jobs
    return this.http.get<Job[]>(this.url, this.getHttpOptions()).pipe(
      catchError((err) => this.handleError(err))
    );
  }

  public getJobById(jobId: number): Observable<Job> {
    // GET request to /api/jobs/{id} to find job by ID
    return this.http.get<Job>(`${this.url}/${jobId}`, this.getHttpOptions()).pipe(
      catchError((err) => this.handleError(err))
    );
  }

  public updateJob(job: Job): Observable<Job> {
    // PUT request to /api/jobs/{id} to update a job
    return this.http.put<Job>(`${this.url}/${job.id}`, job, this.getHttpOptions()).pipe(
      catchError((err) => this.handleError(err))
    );
  }

  public deleteJob(jobId: number): Observable<any> {
    // DELETE request to /api/jobs/{id} to delete a job
    return this.http.delete(`${this.url}/${jobId}`, this.getHttpOptions()).pipe(
      catchError((err) => this.handleError(err))
    );
  }

  // Add other job service methods as needed...

  private getHttpOptions() {
    let credentials = localStorage.getItem('credentials'); // Assuming credentials are stored here
    return {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Basic ${credentials}`
      }
    };
  }

  private handleError(error: any) {
    console.error('JobService Error:', error);
    return throwError(() => new Error('JobService: Error while performing request.'));
  }
}
