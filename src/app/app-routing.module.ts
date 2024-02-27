import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PrimercomponenteComponent } from './components/primercomponente/primercomponente.component';
import { UsersComponent } from './components/users/users.component';
import { EditUserComponent } from './components/edit-user/edit-user.component';
import { HomeComponent } from './components/home/home.component';
import { AdminComponent } from './components/admin/admin.component';
import { UserComponent } from './components/user/user.component';
import { NewUserComponent } from './components/new-user/new-user.component';
import { PokemonsComponent } from './components/pokemons/pokemons.component';
import { EditPokemonComponent } from './components/edit-pokemon/edit-pokemon.component';


const routes: Routes = [
  { path: '', component: PokemonsComponent },
  { path: 'pokemon/:id', component: EditPokemonComponent },
  { path: 'role', component: HomeComponent },
  { path: 'user/:role', component: UserComponent },
  { path: 'admin/:role', component: AdminComponent },
  { path: 'new-user', component: NewUserComponent },
  { path: 'users', component: UsersComponent },
  { path: 'edit-user/:name/:age/:number/:email', component: EditUserComponent },
  { path: 'primercomponente', component: PrimercomponenteComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
