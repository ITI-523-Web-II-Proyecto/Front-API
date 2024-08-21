import { Component } from '@angular/core';
import { EmpresasrvService } from '../services/empresasrv.service';
import {MatTableModule} from '@angular/material/table';
import { Empresa } from '../models/empresa';

@Component({
  selector: 'app-upd-empresa',
  standalone: true,
  imports: [ MatTableModule],
  templateUrl: './upd-empresa.component.html',
  styleUrl: './upd-empresa.component.css'
})
export class UpdEmpresaComponent {

  

}
