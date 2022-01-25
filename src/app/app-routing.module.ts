import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {RegisterComponent} from './user/register/register.component'
import { LoginComponent } from './user/login/login.component'
import { HomeComponent } from './home/home.component';
import { MonumentDetailsComponent } from './monument-details/monument-details.component';
import { LieuDetailsComponent } from './lieu-details/lieu-details.component';
import { CelebriteDetailsComponent } from './celebrite-details/celebrite-details.component';
import { DepartementDetailsComponent } from './departement-details/departement-details.component';
import { DashboardComponent } from './admin/dashboard/dashboard.component';
import {MonumentManageComponent} from './admin/monument-manage/monument-manage.component'

const routes: Routes = [
  {path: 'register', component: RegisterComponent},
  {path: 'login', component: LoginComponent},
  {path: 'home', component: HomeComponent},
  {path: 'monuments/:id', component: MonumentDetailsComponent },
  {path: 'lieux/:id', component: LieuDetailsComponent},
  {path: 'celebrite/:id', component: CelebriteDetailsComponent},
  {path: 'departement/:id', component: DepartementDetailsComponent},
  {path: 'admin', component: DashboardComponent},
  {path: 'admin/edit/monument/:id', component: MonumentManageComponent},
  {path: 'admin/new/monument', component: MonumentManageComponent},
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
