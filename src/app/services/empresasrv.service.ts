import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Empresa } from '../models/empresa';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})


export class EmpresasrvService {

  constructor(private http: HttpClient) { }


  crateEmp(empresa:Empresa):Observable<any>{
    return this.http.post<any>("http://localhost:3000/empresa",empresa);

  }
  


}
