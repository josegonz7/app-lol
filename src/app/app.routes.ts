import { Routes } from '@angular/router';
import { Contact } from '../components/contact/contact';
import { Home } from '../components/home/home';
import { CharacterDetail } from '../components/character-detail/character-detail';
import { CharacterRoles } from '../components/character-roles/character-roles';

export const routes: Routes = [
    {path: '', component: Home},
    {path: 'contact', component: Contact},
    { path: 'character-roles', component: CharacterRoles},
    {path: 'character/:id', component: CharacterDetail}
];