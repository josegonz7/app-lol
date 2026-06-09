import { Injectable } from '@angular/core';
import { Character } from '../model/character';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CharacterService {

  private _baseUrl: string = "http://localhost:8080";

  constructor(
    private _http: HttpClient
  ){};

  public getCharacters(): Observable<Character[]>{
    return this._http.get<Character[]>(this._baseUrl + "/characters");
  }

  public getCharacterById(id: string): Observable<Character>{
    //localhost:8080/api/character/6a0eacc4211dfe11cb09a637
    return this._http.get<Character>(this._baseUrl + "/characters/" + id);
  }
  public getMultipleRoleCharacter(): Observable<Character[]>{
    //localhost:8080/api/character/filter/multipleroles
    return this._http.get<Character[]>(this._baseUrl + "/characters/filter/multipleroles");
}

 public getRoles(): Observable<Character[]>{
    //localhost:8080/api/character/roles
    return this._http.get<Character[]>(this._baseUrl + "/characters/roles");
}
}