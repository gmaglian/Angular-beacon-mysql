import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Area } from '../models/area.model';


const baseUrl = 'http://localhost:8090/api/aree';
@Injectable({
  providedIn: 'root'
})
export class AreaService {
  constructor(private http: HttpClient) { }

  getAll(): Observable<Area[]> {
    return this.http.get<Area[]>(baseUrl);
  }

  get(id: any): Observable<Area> {
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