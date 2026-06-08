import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CharacterMultipleRole } from './character-multiple-role';

describe('CharacterMultipleRole', () => {
  let component: CharacterMultipleRole;
  let fixture: ComponentFixture<CharacterMultipleRole>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CharacterMultipleRole]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CharacterMultipleRole);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
