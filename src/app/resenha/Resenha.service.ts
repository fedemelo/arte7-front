import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Resenha } from './resenha';

@Injectable({
  providedIn: 'root',
})
export class ResenhaService {
  private apiUrl: string = environment.baseUrl + 'resenha';

  constructor(private http: HttpClient) {}

  getResenha(): Observable<Resenha[]> {
    return this.http.get<Resenha[]>(this.apiUrl);
  }
}
