import { Injectable } from '@angular/core';
import { Persona } from '../models/persona';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PersonaService {

  constructor(private http: HttpClient) { }


  crateEmp(persona:Persona):Observable<any>{
    return this.http.post<any>("http://localhost:3000/persona",persona);
  }
  
}
