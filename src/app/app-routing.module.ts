import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PokemonComponent } from './pokemon/pokemon.component';

const routes: Routes = [
  {
    path: '', component: HomeComponent
  },
  {
    path: 'pokemon', component: PokemonComponent
  },

  {
    path: '**', component: HomeComponent
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
