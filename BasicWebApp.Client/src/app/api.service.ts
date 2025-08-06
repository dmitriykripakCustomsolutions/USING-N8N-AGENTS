import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private apiUrl = 'https://localhost:7187/api/test/ping'; // Adjust port if needed

  constructor(private http: HttpClient) { }

  ping(): Observable<any> {
    return this.http.get<any>(this.apiUrl);
  }
}
