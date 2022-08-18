import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BorderCardDirective } from './border-card.directive';
import { DetailPokemonComponent } from './detail-pokemon/detail-pokemon.component';
import { ListPokemonComponent } from './list-pokemon/list-pokemon.component';
import { PokemonTypeColorPipe } from './pokemon-type-color.pipe';
import { RouterModule, Routes } from '@angular/router';
import { EditPokemonComponent } from './edit-pokemon/edit-pokemon.component';
import { PokemonFormComponent } from './pokemon-form/pokemon-form.component';
import { FormsModule } from '@angular/forms';
import { AddPokemonComponent } from './add-pokemon/add-pokemon.component';
import { SearchPokemonComponent } from './search-pokemon/search-pokemon.component';
import { LoaderComponent } from './loader/loader.component';
import { AuthGuard } from '../auth.guard';

const pokemonRoutes: Routes = [
  {path:'edit/pokemon/:id', component:EditPokemonComponent, canActivate:[AuthGuard]},
  {path:'pokemons/add', component:AddPokemonComponent, canActivate:[AuthGuard]},
  {path:'pokemons', component:ListPokemonComponent, canActivate:[AuthGuard]},
  {path:'pokemons/:id', component:DetailPokemonComponent, canActivate:[AuthGuard]},
  
 
];

@NgModule({
  declarations: [
    BorderCardDirective,
    PokemonTypeColorPipe,
    ListPokemonComponent,
    DetailPokemonComponent,
    EditPokemonComponent,
    PokemonFormComponent,
    AddPokemonComponent,
    SearchPokemonComponent,
    LoaderComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(pokemonRoutes)
  ]
})
export class PokemonModule { }
