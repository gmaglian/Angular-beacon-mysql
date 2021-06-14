import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Beacon } from '../models/beacon.model';


const baseUrl = 'http://localhost:8090/api/beacon/context';
//const baseUrl = 'https://nodejs-mysql-beacon.herokuapp.com/api/beacon/context';

@Injectable({
  providedIn: 'root'
})
export class ContextService {

  constructor(private http: HttpClient) { }

  getAll(): Observable<any> {
    return this.http.get(`${baseUrl}/7`);
  }

  get(id: any): Observable<any> {
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
