import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { PokemonService } from 'src/app/services/pokemon/pokemon.service';
import { Pokemon } from 'src/app/interfaces/pokemon';

@Component({
  selector: 'app-edit-pokemon',
  templateUrl: './edit-pokemon.component.html',
  styleUrls: ['./edit-pokemon.component.css']
})
export class EditPokemonComponent implements OnInit {

  pokemonForm: Pokemon = {
    id: 0,
    name: '',
    url: '',
    image: ''
  };

  constructor(
    private pokemonService: PokemonService,
    private route: ActivatedRoute,
    private formBuilder: FormBuilder
  ) { }

  ngOnInit(): void {
    let id = this.route.snapshot.params['id'];
    this.getPokemon(id);
  }

  getPokemon(id: number) {
    this.pokemonService.getPokemonById(id - 1).then((pokemon: any) => {
      this.pokemonForm = pokemon;
      console.log(pokemon);
    }).catch(error => {
      console.error(error);
    });
  }

}
