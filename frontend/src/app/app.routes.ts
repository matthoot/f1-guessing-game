import { Routes } from '@angular/router';
import { Home } from './home/home';
import { GuessingScreen } from './guessing-screen/guessing-screen';

export const routes: Routes = [
  { path: '', component: Home },
  { path: 'game', component: GuessingScreen },
];