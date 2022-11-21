import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { Actor } from './actor';
import { ActorDetail } from './actor-detail';

@Injectable({
  providedIn: 'root',
})
export class ActorService {
  private apiUrl: string = environment.baseUrl + 'actores';

  constructor(private http: HttpClient) {}

  getActores(): Observable<ActorDetail[]> {
    return this.http.get<ActorDetail[]>(this.apiUrl);
  }

  getActor(id: string): Observable<ActorDetail> {
    return this.http.get<ActorDetail>(this.apiUrl + '/' + id);
  }
}
