import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { Resenha } from './Resenha';

@Injectable({
 providedIn: 'root'
})
export class ResenhaService {

 private apiUrl: string = environment.baseUrl + 'resenha';

 constructor(private http: HttpClient) { }

 getResenha(): Observable<Resenha[]> {
   return this.http.get<Resenha[]>(this.apiUrl);
 }

}
