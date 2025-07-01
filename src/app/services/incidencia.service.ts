import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class IncidenciaService {
  private API_URL = 'http://localhost:8080'; // Cambia a tu puerto real

  constructor(private http: HttpClient) {}

  getAll(): Observable<any> {
    return this.http.get(`${this.API_URL}/incidencias`);
  }

  getById(id: string): Observable<any> {
    return this.http.get(`${this.API_URL}/incidencias/${id}`);
  }

  create(data: any): Observable<any> {
    return this.http.post(`${this.API_URL}/incidencias`, data);
  }
}
