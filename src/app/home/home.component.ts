import { ApiService } from './../service/api.service';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  pokemons: any[] = [];
  descriptions: any[] = [];
  page = 1;
  totalPokemons: number;

  constructor(private apiService: ApiService, private router: Router) {}

  ngOnInit(): void {
    this.getPokemons();
  }


  getPokemons() {
    const startIndex = (this.page - 1) * 20;
    this.apiService
      .getPokemons(20, startIndex)
      .subscribe((response: any) => {
        this.totalPokemons = response.count;
        this.pokemons = [];
        this.descriptions = [];
        response.results.forEach((result) => {
          this.apiService
            .getMoreData(result.name)
            .subscribe((uniqResponse: any) => {
              this.pokemons.push(uniqResponse);
            });
          this.apiService
            .getDescription(result.name)
            .subscribe((uniqResponse: any) => {
              this.descriptions.push(uniqResponse);
            });
        });
      });
  }
}
