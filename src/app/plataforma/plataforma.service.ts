import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Plataforma } from './plataforma';

@Injectable({
  providedIn: 'root'
})
export class PlataformaService {
  private apiUrl: string = environment.baseUrl + 'resenha';

  constructor(private http: HttpClient) { }

  getResenha(): Observable<Plataforma[]> {
    return this.http.get<Plataforma[]>(this.apiUrl);
  }

}
