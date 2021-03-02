import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChangeInfoComponent } from './components/change-info/change-info.component';
import { LoginComponent } from './components/login/login.component';
import { UserComponent } from './components/user/user.component';

const routes: Routes = [
  {
    path: '',
    component: LoginComponent
  },
  {
    path: 'user',
    component: UserComponent
  },
  {
    path:'user/change-info',
    component: ChangeInfoComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LoginRoutingModule { }
