import { Component } from '@angular/core';
import { CharacterService } from '../../services/character-service';
import { Character } from '../../model/character';

@Component({
  selector: 'app-character-multiple-role',
  imports: [],
  templateUrl: './character-multiple-role.html',
  styleUrl: './character-multiple-role.css',
})
export class CharacterMultipleRole {

public characters: Character[] = [];

constructor(private _characterService: CharacterService) {}

ngOnInit(): void {
  this._characterService.getMultipleRoleCharacter().subscribe(data => {
    this.characters = data;
  });
}
}
