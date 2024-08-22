import { Component } from '@angular/core';
import { MatTableModule } from '@angular/material/table';
import { Empresa } from '../../../../models/empresa';
import { EmpresaService } from '../../../../services/empresa.service';




@Component({
  selector: 'app-get-emp',
  standalone: true,
  imports: [MatTableModule],
  templateUrl: './get-emp.component.html',
  styleUrl: './get-emp.component.css'
})
export class GetEmpComponent {
  displayedColumns: string[] = ['id_empresa', 'nombre', 'url', 'telefono', 'direccion', "estado"];

  lista:Empresa[]=[];


  constructor(private empresasrv:EmpresaService){}


  ngOnInit(){

    this.cargarDatos();
  }
  cargarDatos(){
    this.empresasrv.getEmp().subscribe((datos)=>{

      this.lista = datos;
    })
  }
}
