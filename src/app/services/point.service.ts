import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Point } from '../models/point.model';


const baseUrl = 'http://localhost:8090/api/puntidiinteresse';
//const baseUrl = 'https://nodejs-mysql-beacon.herokuapp.com/api/puntidiinteresse';

@Injectable({
  providedIn: 'root'
})
export class PointService {

  constructor(private http: HttpClient) { }

  getAll(): Observable<Point[]> {
    return this.http.get<Point[]>(baseUrl);
  }

  get(id: any): Observable<Point> {
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
