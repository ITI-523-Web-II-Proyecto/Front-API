import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Empresa } from '../models/empresa';
import { Observable } from 'rxjs';
import { Certificado } from '../models/certificado';


@Injectable({
  providedIn: 'root'
})
export class EmpresaService {

  constructor(private http: HttpClient) { }


  crateEmp(empresa:Empresa):Observable<any>{
    return this.http.post<any>("http://localhost:3000/empresa",empresa);
  }

  crateCert(certificado:Certificado):Observable<any>{
    return this.http.post<any>("http://localhost:3000/certificado",certificado);
  }

  
  getEmp():Observable<Empresa[]>{
    return this.http.get<Empresa[]>("http://localhost:3000/empresa");
   }
}
