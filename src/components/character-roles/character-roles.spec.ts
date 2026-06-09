import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CharacterRoles } from './character-roles';

describe('CharacterRoles', () => {
  let component: CharacterRoles;
  let fixture: ComponentFixture<CharacterRoles>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CharacterRoles]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CharacterRoles);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
