import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './Pages/home/home.component';

const routes: Routes = [
  {path:'' , component:HomeComponent},
  {path: 'Users', loadChildren: () => import('./Pages/users/users.module').then(m => m.UsersModule),data:{breadcrumb:'Users'}},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ViewRoutingModule { }
