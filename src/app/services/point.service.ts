import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Point } from '../models/point.model';
import{ GlobalConstants } from '../common/global-constants';

const localUrl = 'http://localhost:8090/api/puntidiinteresse';
const remoteUrl = 'https://nodejs-mysql-beacon.herokuapp.com/api/puntidiinteresse';

@Injectable({
  providedIn: 'root'
})
export class PointService {
  localhost = GlobalConstants.local_host;
  baseUrl:string = "";

  constructor(private http: HttpClient) {
  
    if(this.localhost)
    {
      this.baseUrl = localUrl;
      
    } else {
      this.baseUrl = remoteUrl;
    }
    console.log('Point of Interest Url:' + this.baseUrl);

  }
  

  getAll(): Observable<Point[]> {
    return this.http.get<Point[]>(this.baseUrl);
  }

  get(id: any): Observable<Point> {
    return this.http.get(`${this.baseUrl}/${id}`);
  }

  create(data: any): Observable<any> {
    return this.http.post(this.baseUrl, data);
  }

  update(id: any, data: any): Observable<any> {
    return this.http.put(`${this.baseUrl}/${id}`, data);
  }

  delete(id: any): Observable<any> {
    return this.http.delete(`${this.baseUrl}/${id}`);
  }

  deleteAll(): Observable<any> {
    return this.http.delete(this.baseUrl);
  }
}
