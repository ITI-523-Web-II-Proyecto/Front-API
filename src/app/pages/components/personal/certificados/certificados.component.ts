import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { EmpresaService } from '../../../../services/empresa.service';
import { RouterLink, RouterOutlet } from '@angular/router';
import { NgClass, NgIf } from '@angular/common';


@Component({
  selector: 'app-certificados',
  standalone: true,
  imports: [RouterLink, RouterOutlet, ReactiveFormsModule, NgIf, FormsModule, NgClass],
  templateUrl: './certificados.component.html',
  styleUrl: './certificados.component.css'
})
export class CertificadosComponent implements OnInit {
  certificadoForm!: FormGroup;

  constructor(private fb: FormBuilder, private certificadoService: EmpresaService) {}
  ngOnInit() {
    this.certificadoForm = this.fb.group({
      id_certificado: ['', Validators.required],
      descripcion: ['', Validators.required],
      categoria: ['', Validators.required],
      institucion: ['', Validators.required],
      año: ['', Validators.required], 
      persona: ['', Validators.required]
    });
  }

  onsubmit() {
    if (this.certificadoForm.valid) {
      console.log('Formulario de empresa enviado:', this.certificadoForm.value);
      this.certificadoService.crateCert(this.certificadoForm.value).subscribe({
        next: (resp) => {
          alert("El  certificado se registró correctamente");
     
          
        },
        error: (err) => {
          console.log(err);
          alert("Error al registrar la empresa");
        }
      });
    }
  }


}
