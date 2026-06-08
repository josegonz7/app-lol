import { Component, OnInit } from '@angular/core';
import { CharacterService } from '../../services/character-service';
import { Character } from '../../model/character';
import { CommonModule } from '@angular/common'; // 1. Importamos CommonModule

@Component({
  selector: 'app-home',
  imports: [CommonModule], // 2. Lo añadimos aquí para que funcione el *ngFor en el HTML
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home implements OnInit {

  public characters: Character[] = [];

  constructor(
    private _characterService: CharacterService
  ) {}

  ngOnInit(): void {
    // 3. Añadimos el tipo (: Character[]) a result para evitar el error de TypeScript
    this._characterService.getCharacters().subscribe((result: Character[]) => {
      this.characters = result;
      
      // OJO: El console.log debe ir AQUÍ DENTRO. 
      // Como la petición a la API es asíncrona, si lo dejas fuera se ejecutará 
      // antes de que lleguen los datos y siempre verás el array vacío [].
      console.log('Datos recibidos de la API:', this.characters);
    });
  }

}