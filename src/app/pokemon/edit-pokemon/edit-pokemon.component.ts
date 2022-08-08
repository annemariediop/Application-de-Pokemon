import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Pokemon } from '../pokemon';
import { PokemonService } from '../pokemon.service';

@Component({
  selector: 'app-edit-pokemon',
  template: `
  <h5 >Editer {{pokemon?.name}}</h5>
  <p class="center">
    <img [src]="pokemon?.picture"/>
  </p>
  <app-pokemon-form  *ngIf="pokemon" [pokemon]="pokemon"></app-pokemon-form>
   
  `,
  styles: [
  ]
})
export class EditPokemonComponent implements OnInit {
pokemon: Pokemon | undefined ;

  constructor(private router: ActivatedRoute, private pokemonService: PokemonService) { }

  ngOnInit(): void {

    const pokemonId=this.router.snapshot.paramMap.get('id');
    if(pokemonId){
      this.pokemonService.getPokemonById(+pokemonId).subscribe(
        pokemon=>this.pokemon=pokemon
      );
    } else{
      this.pokemon=undefined;
    }

  }

}
