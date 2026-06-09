import { Component } from '@angular/core';
import { CharacterService } from '../../services/character-service';
import { Character } from '../../model/character';

@Component({
  selector: 'app-character-roles',
  imports: [],
  templateUrl: './character-roles.html',
  styleUrl: './character-roles.css',
})
export class CharacterRoles {
public characters: Character[] = [];

constructor(private _characterService: CharacterService) {}

ngOnInit(): void {
  this._characterService.getRoles().subscribe(data => {
    this.characters = data;
  });
}
}
