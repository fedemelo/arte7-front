import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Genero } from './genero';

@Injectable({
  providedIn: 'root'
})
export class GeneroService {

  private apiUrl: string = environment.baseUrl + 'genero';

  constructor(private http: HttpClient) { }

  getGenero(): Observable<Genero[]>{
    return this.http.get<Genero[]>(this.apiUrl);
  }

}
