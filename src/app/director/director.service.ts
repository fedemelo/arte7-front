import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { DirectorDetail } from './director-detail';

@Injectable({
  providedIn: 'root',
})
export class DirectorService {
  private apiUrl: string = environment.baseUrl + 'directores';

  constructor(private http: HttpClient) {}

  getDirectores(): Observable<DirectorDetail[]> {
    return this.http.get<DirectorDetail[]>(this.apiUrl);
  }

  getDirector(id: string): Observable<DirectorDetail> {
    return this.http.get<DirectorDetail>(this.apiUrl + '/' + id);
  }
}
