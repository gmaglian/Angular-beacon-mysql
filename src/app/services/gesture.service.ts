import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Gesture } from '../models/gesture.model';


const baseUrl = 'http://localhost:8090/api/gesture';
//const baseUrl = 'https://nodejs-mysql-beacon.herokuapp.com/api/gesture';

@Injectable({
  providedIn: 'root'
})
export class GestureService {

  constructor(private http: HttpClient) { }

  getAll(): Observable<Gesture[]> {
    return this.http.get<Gesture[]>(baseUrl);
  }

  get(id: any): Observable<Gesture> {
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
