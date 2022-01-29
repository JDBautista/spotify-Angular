import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePagesComponent } from './pages/home-pages/home-pages.component';

const routes: Routes = [
  //{
    // path:'', component:HomePagesComponent
    // Para enviar un parametro hacia la URL, se utiliza ":" seguido de "x"
    // path:'prefijo/:username/:other',component:HomePagesComponent
  //}
  {
    path:"tracks",
    loadChildren:()=> import('@modules/tracks/tracks.module').then(m=>m.TracksModule)
  },
  {
    path:"history",
    loadChildren:()=> import('@modules/history/history.module').then(m=>m.HistoryModule)
  },
  {
    path:"favorite",
    loadChildren:()=> import('@modules/favorites/favorites.module').then(m=>m.FavoritesModule)
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
