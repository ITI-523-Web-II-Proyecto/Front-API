import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { PersonaService } from '../../../../services/persona.service';

@Component({
  selector: 'app-certificado',
  standalone: true,
  imports: [ ReactiveFormsModule,  FormsModule],
  templateUrl: './certificado.component.html',
  styleUrl: './certificado.component.css'
})
export class CertificadoComponent implements OnInit {
  certificadoForm!: FormGroup;

  constructor(private fb: FormBuilder, private certificadoService: PersonaService) {}
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
