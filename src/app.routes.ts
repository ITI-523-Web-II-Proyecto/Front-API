
import { Routes } from '@angular/router';
import { HomeComponent } from './app/pages/components/home/home.component';
import { OfertarEmpComponent } from './app/pages/components/empresa/ofertar-emp/ofertar-emp.component';
import { GetEmpComponent } from './app/pages/components/empresa/get-emp/get-emp.component';
import { LoginComponent } from './app/pages/components/auth/login/login.component';
import { SigninComponent } from './app/pages/components/auth/signin/signin.component';
import { HomeEmpresaComponent } from './app/pages/components/empresa/home-empresa/home-empresa.component';
import { PerfilComponent } from './app/pages/components/personal/perfil/perfil.component';
import { CertificadosComponent } from './app/pages/components/personal/certificados/certificados.component';



export const routes: Routes = [
  { path: '', component: HomeComponent },  
  { path: 'login', component: LoginComponent },
  { path: 'signin', component: SigninComponent },
  { path: 'oferta', component: OfertarEmpComponent },
  { path: 'getEmp', component: GetEmpComponent },
  { path: 'homeEmpresa', component: HomeEmpresaComponent },
  { path: 'aplicante', component: PerfilComponent },
  { path: 'certificado', component: CertificadosComponent }


  
];
