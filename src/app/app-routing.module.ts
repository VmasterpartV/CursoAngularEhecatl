import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PrimercomponenteComponent } from './components/primercomponente/primercomponente.component';

const routes: Routes = [
  { path: 'primercomponente', component: PrimercomponenteComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
