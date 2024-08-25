import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Empresa } from '../models/empresa';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class EmpresaService {

  constructor(private http: HttpClient) { }


  createEmpresa(empresa:Empresa):Observable<any>{
    return this.http.post<any>("http://localhost:3000/empresa",empresa);
  }

  getEmpresa():Observable<Empresa[]>{
    return this.http.get<Empresa[]>("http://localhost:3000/empresa");
   }
}
