import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { OurMaterialComponent } from './our-material/our-material.component';
import { CoursesComponent } from './courses/courses.component';
import { AuthenticationComponent } from './authentication/authentication.component';
import { ContactComponent } from './contact/contact.component';
import { CreateAccountComponent } from './create-account/create-account.component';
import { ProfileUserComponent } from './profile-user/profile-user.component';
import { ProfileCompanyComponent } from './profile-company/profile-company.component';


const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'sobre-nos', component: AboutComponent},
  {path: 'nosso-material', component: OurMaterialComponent},
  {path: 'cursos', component: CoursesComponent},
  {path: 'contato', component: ContactComponent},
  {path: 'autenticacao', component: AuthenticationComponent},
  {path: 'registrar', component: CreateAccountComponent},
  {path: 'perfil-usuario', component: ProfileUserComponent},
  {path: 'perfil-empresa', component: ProfileCompanyComponent},
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [

                                  // this const go to app.modules.ts "declarations" 
                                  HomeComponent, 
                                  AboutComponent, 
                                  OurMaterialComponent, 
                                  CoursesComponent, 
                                  AuthenticationComponent, 
                                  ContactComponent,
                                  CreateAccountComponent
                                  
                                ]
