import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  url = 'https://pokeapi.co/api/v2/pokemon?offset=0&limit=200';

  constructor(private http: HttpClient) { }

  getAllPokemons() {
    return this.http.get(this.url).pipe(
      map((data: any) => {
        data.results.forEach((pokemon: any, index: number) => {
          pokemon.id = index + 1;
          pokemon.image = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.id}.png`;
        });
        return data;
      })
    );
  }
  
  async getPokemonById(id: number) {
    const pokemons = await this.getAllPokemons().toPromise();
    const pokemon = pokemons['results'][id];
    return pokemon;
  }

  updatePokemon(id: number, pokemon: any) {
    this.getAllPokemons().subscribe((data: any) => {
      data.results[id] = pokemon;
    });
  }

  deletePokemon(id: number) {
    this.getAllPokemons().subscribe((data: any) => {
      data.results.splice(id, 1);
    });
  }
}
