import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from 'src/environments/environment';
import { catchError, Observable, throwError } from 'rxjs';
import { PeliculaDetail } from './pelicula-detail';

@Injectable({
  providedIn: 'root',
})
export class PeliculaService {
  private apiUrl: string = environment.baseUrl + 'pelicula';

  constructor(private http: HttpClient) {}

  getPeliculas(): Observable<PeliculaDetail[]> {
    return this.http.get<PeliculaDetail[]>(this.apiUrl).pipe(
        catchError((err) => throwError(() => new Error('error en el servicio')))
      );
  }

  getPelicula(id: string): Observable<PeliculaDetail> {
    return this.http.get<PeliculaDetail>(this.apiUrl + '/' + id);
  }

  createPelicula(pelicula: PeliculaDetail): Observable<PeliculaDetail> {
    return this.http.post<PeliculaDetail>(this.apiUrl, pelicula);
  }
}
