import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Theater } from '../models/theater.model';

//const baseUrl = 'http://localhost:8090/api/teatri';

const baseUrl = 'https://nodejs-mysql-beacon.herokuapp.com/api/teatri';

@Injectable({
  providedIn: 'root'
})
export class TheaterService {
  constructor(private http: HttpClient) { }

  getAll(): Observable<Theater[]> {
    return this.http.get<Theater[]>(baseUrl);
  }

  get(id: any): Observable<Theater> {
    return this.http.get(`${baseUrl}/${id}`);
  }

  create(data: any): Observable<any> {
    return this.http.post(baseUrl, data);
  }

  update(id: any, data: any): Observable<any> {
    return this.http.put(`${baseUrl}/${id}`, data);
  }

  delete(id: any): Observable<any> {
    return this.http.delete(`${baseUrl}/${id}`);
  }

  deleteAll(): Observable<any> {
    return this.http.delete(baseUrl);
  }
}
