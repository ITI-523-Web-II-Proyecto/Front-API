import { Component, inject } from '@angular/core';
import { ActivatedRoute, Router, RouterLink, RouterOutlet } from '@angular/router';
import { FooterComponent } from '../../shared/footer/footer.component';
import { MatCardModule } from '@angular/material/card';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
import { MatIconModule } from '@angular/material/icon';
import {MatListModule} from '@angular/material/list';
import { Empresa } from '../../../../models/empresa';
import { EmpresaService } from '../../../../services/empresa.service';
import { NgFor, NgIf } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-perfil-emp',
  standalone: true,
  imports: [RouterLink,
    RouterOutlet,
    FooterComponent,
    MatCardModule,
    MatDialogModule,
    MatSnackBarModule,
    MatIconModule,
    NgFor,
    NgIf,
    MatListModule,
    MatCardModule, 
    MatButtonModule],
  templateUrl: './perfil-emp.component.html',
  styleUrl: './perfil-emp.component.css'
})
export class PerfilEmpComponent {
  empresa!: Empresa;

  constructor(
    private empresaService: EmpresaService,
    private router: Router,
    public dialog: MatDialog,
    private snackBar: MatSnackBar
  ) {}

  ngOnInit(): void {
    this.loadEmpresa();
  }

  loadEmpresa(): void {
    const empresaId = localStorage.getItem('empresaId'); // Obtener el ID de empresa desde localStorage
    if (empresaId) {
      this.empresaService.getEmpresaById(Number(empresaId)).subscribe({
        next: (data) => {
          this.empresa = data;
        },
        error: (err) => {
          console.error('Error fetching empresa data', err);
          this.snackBar.open('Error al cargar los datos de la empresa', 'Cerrar', {
            duration: 3000,
          });
        }
      });
    } else {
      this.snackBar.open('No se encontró el ID de la empresa en el localStorage', 'Cerrar', {
        duration: 3000,
      });
      this.router.navigate(['/login']); // Redirigir al login si no hay ID
    }
  }


  editEmpresa() {

  }

  openDeleteDialog() {
   
  }

}
