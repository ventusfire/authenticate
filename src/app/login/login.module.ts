import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginRoutingModule } from './login-routing.module';
import { LoginComponent } from './components/login/login.component';
import { ReactiveFormsModule } from '@angular/forms';
import { UserComponent } from './components/user/user.component';
import { ChangeInfoComponent } from './components/change-info/change-info.component';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
  declarations: [LoginComponent, UserComponent, ChangeInfoComponent],
  imports: [
    CommonModule,
    LoginRoutingModule,
    ReactiveFormsModule,
    MatIconModule
  ]
})
export class LoginModule { }
