import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PrimercomponenteComponent } from './components/primercomponente/primercomponente.component';
import { UsersComponent } from './components/users/users.component';
import { EditUserComponent } from './components/edit-user/edit-user.component';
import { ReactiveFormsModule } from '@angular/forms';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { UserComponent } from './components/user/user.component';
import { AdminComponent } from './components/admin/admin.component';
import { NewUserComponent } from './components/new-user/new-user.component';
import { PokemonsComponent } from './components/pokemons/pokemons.component';
import { HttpClientModule } from '@angular/common/http';
import { EditPokemonComponent } from './components/edit-pokemon/edit-pokemon.component';

@NgModule({
  declarations: [
    AppComponent,
    PrimercomponenteComponent,
    UsersComponent,
    EditUserComponent,
    NavbarComponent,
    HomeComponent,
    UserComponent,
    AdminComponent,
    NewUserComponent,
    PokemonsComponent,
    EditPokemonComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
