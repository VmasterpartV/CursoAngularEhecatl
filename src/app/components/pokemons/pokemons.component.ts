import { Component, OnInit } from '@angular/core';
import { PokemonService } from 'src/app/services/pokemon/pokemon.service';
import { Pokemon } from 'src/app/interfaces/pokemon';

@Component({
  selector: 'app-pokemons',
  templateUrl: './pokemons.component.html',
  styleUrls: ['./pokemons.component.css']
})
export class PokemonsComponent implements OnInit {

  pokemons: Pokemon[] = [];

  constructor(private pokemonService: PokemonService) { }

  ngOnInit(): void {
    this.getPokemons();
  }

  getPokemons() {
    try {
      this.pokemonService.getAllPokemons().subscribe((data: any) => {
        const pokeList = data.results;
        this.pokemons = pokeList;
        console.log(this.pokemons);
      });
    } catch (error) {
      console.error(error);
    }
  }
}
