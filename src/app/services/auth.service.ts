import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private API_URL = 'http://localhost:8080'; // Cambia al puerto real de tu backend

  constructor(private http: HttpClient) { }

  login(credentials: { username: string, password: string }): Observable<any> {
    return this.http.post(`${this.API_URL}/auth/login`, credentials);
  }

  register(data: { username: string, password: string }): Observable<any> {
    return this.http.post(`${this.API_URL}/auth/register`, data);
  }
}
