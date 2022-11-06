import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { Director } from './director';

@Injectable({
  providedIn: 'root'
 })
export class DirectorService {

 private apiUrl: string = environment.baseUrl + 'directores';

 constructor(private http: HttpClient) { }

 getDirectores(): Observable<Director[]> {
   return this.http.get<Director[]>(this.apiUrl);
 }

}
