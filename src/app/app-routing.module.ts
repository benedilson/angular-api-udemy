import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path: 'home', loadChildren:() => import('./home/home.module').then((m) => m.HomeModule)},
  {path: 'usuario', loadChildren:() => import('./usuario/usuario.module').then((u) => u.UsuarioModule)},
  {path: '', pathMatch:'full', redirectTo:'/home'}
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes, {useHash:true})
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
