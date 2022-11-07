import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { DirectorDetail } from './director-detail';
import { Director } from './director';

@Injectable({
  providedIn: 'root'
})
export class DirectorService {
  private apiUrl:string =environment.baseUrl +'directores';

constructor(private http: HttpClient) { }

getActores(): Observable<Director[]>{
return this.http.get<Director[]>(this.apiUrl);
}

getActor(id:number): Observable<DirectorDetail>{
  return this.http.get<DirectorDetail>(this.apiUrl + '/' + id);
}


}
