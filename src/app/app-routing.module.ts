import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PrimercomponenteComponent } from './components/primercomponente/primercomponente.component';
import { UsersComponent } from './components/users/users.component';
import { EditUserComponent } from './components/edit-user/edit-user.component';


const routes: Routes = [
  { path: '', component: UsersComponent },
  { path: 'edit-user/:name/:age/:number/:email', component: EditUserComponent },
  { path: 'primercomponente', component: PrimercomponenteComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
