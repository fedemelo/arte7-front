import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { PeliculaDetail } from './pelicula-detail';
import { Pelicula } from './pelicula';

@Injectable({
  providedIn: 'root',
})
export class PeliculaService {
  private apiUrl: string = environment.baseUrl + 'peliculas';

  constructor(private http: HttpClient) {}

  getPeliculas(): Observable<Pelicula[]> {
    return this.http.get<Pelicula[]>(this.apiUrl);
  }

  getPelicula(id: number): Observable<PeliculaDetail> {
    return this.http.get<PeliculaDetail>(this.apiUrl + '/' + id);
  }

  createPelicula(pelicula: PeliculaDetail): Observable<PeliculaDetail> {
    return this.http.post<PeliculaDetail>(this.apiUrl, pelicula);
  }
}
