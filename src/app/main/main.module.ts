import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DashboardMenuComponent } from './dashboard-menu/dashboard-menu.component';
import { MainRoutingModule } from './main-routing.module';

@NgModule({
  imports: [
    CommonModule,
    MainRoutingModule
  ],
  declarations: [
    LoginComponent,
    DashboardComponent,
    DashboardMenuComponent,
  ]
})
export class MainModule { }
