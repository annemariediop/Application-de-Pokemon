import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, Subject } from 'rxjs';
import { Pokemon } from '../pokemon';

@Component({
  selector: 'app-search-pokemon',
  templateUrl: './search-pokemon.component.html',
  styles: [
  ]
})
export class SearchPokemonComponent implements OnInit {

  //flux de données des recherches de l'utilisateur
  //exemple: "a"..."ab"... "abz"
  searchTerms= new Subject<string>();

  //résultat des recherches de pokemon 
  pokemon$:Observable< Pokemon[]>;
  constructor(
    private router: Router
    ) { }

  ngOnInit(): void {
  }
  search( term: string){
    this.searchTerms.next(term);

  }
  goTodetail(pokemon: Pokemon){
    const link= ['/pokemons', pokemon.id];
    this.router.navigate(link);
  }

}
