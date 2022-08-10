import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, of, tap } from 'rxjs';
import { Pokemon } from './pokemon';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {
  constructor(private http: HttpClient) {

  }

  getPokemonList(): Observable<Pokemon[]> {
    //return POKEMONS;
    return this.http.get<Pokemon[]>('api/pokemons').pipe(
      tap((response) => this.log(response)),
      catchError((error) => this.handeError(error, [])
      )
    )
  }
  getPokemonById(idpokemon: number): Observable<Pokemon | undefined> {
    //  return POKEMONS.find(pokemon => pokemon.id== idpokemon);
    return this.http.get<Pokemon>(`api/pokemons/${idpokemon}`).pipe(
      tap((response) => this.log(response)),
      catchError((error) => this.handeError(error, undefined)
      )
    )
  }
  updatePokemon(pokemon: Pokemon): Observable<Pokemon> {
    const httpOptions = {
      headers: new HttpHeaders({ 'Content-type': 'application/json' })
    }
    return this.http.put<Pokemon>('api/pokemons', pokemon, httpOptions).pipe(
      tap((response) => this.log(response)),
      catchError((error) => this.handeError(error, undefined)
      )
    )

  }
  addPokemon(pokemon: Pokemon): Observable<Pokemon> {
    const httpOptions = {
      headers: new HttpHeaders({ 'Content-type': 'application/json' })
    }
    return this.http.post<Pokemon>('api/pokemons', pokemon, httpOptions).pipe(
      tap((response) => this.log(response)),
      catchError(
        (error) => this.handeError(error, null)
      )
    )

  }

  deletePokemon(idpokemon: number): Observable<Pokemon | undefined> {
  
    return this.http.delete<Pokemon>(`api/pokemons/${idpokemon}`).pipe(
      tap((response) => this.log(response)),
      catchError((error) => this.handeError(error, undefined)
      )
    )
  }
  searchPokemonList(term: string): Observable<Pokemon[]>{
    return this.http.get<Pokemon[]>(`api/pokemons/?name=${term}`).pipe(
      tap((response) => this.log(response)),
      catchError((error) => this.handeError(error, [])
      )
    )
  }
  private log(response: Pokemon[] | Pokemon | undefined | Object) {
    console.table(response);
  }
  private handeError(error: Error, errorValue: any) {
    console.error(error)
    return of(errorValue);
  }
  getPokemonTypeList(): string[] {
    return [
      'Plante',
      'Feu',
      'Eau',
      'Insecte',
      'Normal',
      'ELectric',
      'Fée',
      'Poison',
      'Vol',
      'Combat',
      'Psy'
    ]
  }
}
