import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { ActorDetail } from './actor-detail';

@Injectable({
  providedIn: 'root',
})
export class ActorService {
  private apiUrl: string = environment.baseUrl + 'actores';

  constructor(private http: HttpClient) {}

  getActores(): Observable<ActorDetail[]> {
    console.log(Injectable)
    return this.http.get<ActorDetail[]>(this.apiUrl);
  }

  getActor(id: string): Observable<ActorDetail> {
    return this.http.get<ActorDetail>(this.apiUrl + '/' + id);
  }
}
