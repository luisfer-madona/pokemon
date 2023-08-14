import { Component, OnInit,  } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from './../service/api.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-pokemon',
  templateUrl: './pokemon.component.html',
  styleUrls: ['./pokemon.component.css'],
})
export class PokemonComponent implements OnInit {
  nombrePokemon: string;

pokemonData$: Observable<any>;
pokemonDescription$: Observable<any>;
searchQuery: string;
  SharedSearchService: any;
  constructor(private apiService: ApiService, private route: ActivatedRoute) {}

  ngOnInit() {
    this.route.queryParams.subscribe((params) => {

      this.nombrePokemon = params['name'];
      //console.log('Valor del parámetro "name":', this.nombrePokemon);

      this.getPokemon();
      this.getDescription();
    });


  }


  getPokemon() {
    this.pokemonData$ = this.apiService.getMoreData(this.nombrePokemon);
  }
  getDescription() {
    this.pokemonDescription$ = this.apiService.getDescription(this.nombrePokemon);
  }


}
