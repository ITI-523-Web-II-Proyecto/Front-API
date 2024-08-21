import { NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterLink, RouterOutlet } from '@angular/router';
import { EmpresasrvService } from '../../app/services/empresasrv.service';


@Component({
  selector: 'app-signin',
  standalone: true,
  imports: [RouterLink, RouterOutlet, ReactiveFormsModule, NgIf, FormsModule], 
  templateUrl: './signin.component.html',
  styleUrl: './signin.component.css'
})
export class SigninComponent {
  myForm!:  FormGroup;


  constructor(private fb: FormBuilder, private empresasrv: EmpresasrvService) {
    this.myForm = this.fb.group({
      id_empresa: ['', Validators.required],
      nombre: ['', Validators.required],
      url: ['', Validators.required],
      telefono: ['', Validators.required],
      direccion: ['', Validators.required],
      contraseña: ['', Validators.required],
      estado: [true],
      

    });
  }

  onSubmit(){
   
      if(this.myForm.valid){
        console.log('Formulario enviado:', this.myForm.value);
        this.empresasrv.crateEmp(this.myForm.value).subscribe((resp)=>{
          alert("Se guardo correctamente");
          this.clearForm();
        },(err)=>{
          console.log(err);
          alert("Error al guardar");
        })
      }
    
  }
  clearForm() {
    this.myForm.reset();  // Limpia el formulario
   
  }
}

  
