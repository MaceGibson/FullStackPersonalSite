import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, throwError } from 'rxjs';
import { environment } from '../../environments/environment.development';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private baseUrl = environment.baseUrl; // Ensure you have the correct base URL in your environment files

  constructor(private http: HttpClient) { }

  updateProfile(user: User): Observable<User> {
    const httpOptions = this.getHttpOptions();
    return this.http.put<User>(`${this.baseUrl}api/users/${user.id}`, user, httpOptions)
      .pipe(catchError(this.handleError));
  }

  updatePassword(userId: number, newPassword: string): Observable<any> {
    const httpOptions = this.getHttpOptions();
    // Assuming your backend expects an object with a newPassword field for password updates
    return this.http.put(`${this.baseUrl}api/users/${userId}/password`, { newPassword }, httpOptions)
      .pipe(catchError(this.handleError));
  }

  private getHttpOptions() {
    let credentials = localStorage.getItem('credentials');
    return {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': `Basic ${credentials}`
      })
    };
  }

  private handleError(error: any) {
    console.error('UserService Error:', error);
    return throwError(() => new Error('UserService: Error updating user details.'));
  }
}
