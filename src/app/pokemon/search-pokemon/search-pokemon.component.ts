import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { debounce, debounceTime, distinctUntilChanged, map, Observable, Subject, switchMap } from 'rxjs';
import { Pokemon } from '../pokemon';
import { PokemonService } from '../pokemon.service';

@Component({
  selector: 'app-search-pokemon',
  templateUrl: './search-pokemon.component.html',
  styles: [
  ]
})
export class SearchPokemonComponent implements OnInit {

  //flux de données des recherches de l'utilisateur
  //exemple: "a"..."ab"... "abz"
  searchTerms = new Subject<string>();

  //résultat des recherches de pokemon 
  pokemon$: Observable<Pokemon[]>;
  constructor(
    private router: Router,
    private pokemonService: PokemonService
  ) { }

  ngOnInit(): void {

    this.pokemon$ = this.searchTerms.pipe(
      //...."a"."ab".."abz"."ab"...."abc"......
      debounceTime(300),
      //....."ab"...."ab"...."abc"......
      distinctUntilChanged(),
      //....."ab"......."abc"......
      switchMap((term) => this.pokemonService.searchPokemonList(term))
      //....."pokemonList(ab)"......."pokemonList(abc)"......
    );

  }
  search(term: string) {
    this.searchTerms.next(term);

  }
  goTodetail(pokemon: Pokemon) {
    const link = ['pokemons/', pokemon.id];
    this.router.navigate(link);
  }

}
