import { NgClass, NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterLink, RouterOutlet } from '@angular/router';
import { EmpresaService } from '../../../../services/empresa.service';
import { Persona } from '../../../../models/persona';
import { PersonaService } from '../../../../services/persona.service';

@Component({
  selector: 'app-signin',
  standalone: true,
  imports: [RouterLink, RouterOutlet, ReactiveFormsModule, NgIf, FormsModule, NgClass],
  templateUrl: './signin.component.html',
  styleUrl: './signin.component.css'
})
export class SigninComponent {
  empresaForm!: FormGroup;
  personalForm!: FormGroup;

  constructor(private fb: FormBuilder, private empresasrv: EmpresaService,private router: Router, private persona: PersonaService) {

    this.empresaForm = this.fb.group({
      id_empresa: ['', Validators.required],
      nombre: ['', Validators.required],
      url: ['', Validators.required],
      telefono: ['', Validators.required],
      direccion: ['', Validators.required],
      contraseña: ['', Validators.required],
      estado: [true],


    });
  }

  onSubmitEmpresa() {
    if (this.empresaForm.valid) {
      console.log('Formulario de empresa enviado:', this.empresaForm.value);
      this.empresasrv.crateEmp(this.empresaForm.value).subscribe({
        next: (resp) => {
          alert("La empresa se registró correctamente");
          this.clearForm(this.empresaForm);
          this.router.navigate(['/login']);
        },
        error: (err) => {
          console.log(err);
          alert("Error al registrar la empresa");
        }
      });
    }
  }

  onSubmitPersonal() {
    if (this.personalForm.valid) {
      console.log('Formulario de cliente enviado:', this.personalForm.value);
      this.persona.crateEmp(this.personalForm.value).subscribe({
        next: (resp) => {
          alert("El cliente se registró correctamente");
          this.clearForm(this.personalForm);
          this.router.navigate(['/signin']);
        },
        error: (err) => {
          console.log(err);
          alert("Error al registrar el cliente");
        }
      });
    }
  }

  clearForm(form: FormGroup) {
    form.reset();
  }

  isActive: boolean = false;

  toggleRegister() {
    this.isActive = true;
  }

  toggleLogin() {
    this.isActive = false;
  }

}


