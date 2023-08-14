import { Component, ChangeDetectorRef, ViewChild, ElementRef } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from './../service/api.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  @ViewChild('searchTerm') searchTermRef!: ElementRef;

  constructor(private router: Router, private apiService: ApiService, private cdRef: ChangeDetectorRef) { }


  searchPokemon(searchTerm: string) {
    this.apiService.getMoreData(searchTerm).subscribe((data: any) => {
      if (data.name) {
        this.router.navigate(['/pokemon'], { queryParams: { name: searchTerm } });
        this.clearSearchTerm();
      } else {
        console.log("hola");
        this.clearSearchTerm();
      }
    });
  }

  private clearSearchTerm() {
    this.searchTermRef.nativeElement.value = ''; // Limpiar el campo de búsqueda
    this.cdRef.detectChanges(); // Forzar la detección de cambios
  }
}
