import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { ActorDetail } from './actor-detail';
import { Actor } from './actor';

@Injectable({
  providedIn: 'root'
})
export class ActorService {
  private apiUrl:string =environment.baseUrl +'actores';

constructor(private http: HttpClient) { }

getActores(): Observable<Actor[]>{
return this.http.get<Actor[]>(this.apiUrl);
}

getActor(id:number): Observable<ActorDetail>{
  return this.http.get<ActorDetail>(this.apiUrl + '/' + id);
}


}
