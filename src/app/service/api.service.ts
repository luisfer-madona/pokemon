import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class ApiService {
  constructor(private http: HttpClient) { }


getPokemons(limit:number, offset:number){
return this.http.get(`https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`);
}

getMoreData(name: string){
  //console.log('Valor del parámetro "name":', name);
return this.http.get(`https://pokeapi.co/api/v2/pokemon/${name}`);

}

getDescription(name: string){
return this.http.get(`https://pokeapi.co/api/v2/pokemon-species/${name}`);
}
}
