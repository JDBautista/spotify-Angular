import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { MediaplayerComponent } from './components/mediaplayer/mediaplayer.component';
import { HeaderUserComponent } from './components/headeruser/headeruser.component';



@NgModule({
  declarations: [
    SidebarComponent,
    MediaplayerComponent,
    HeaderUserComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    SidebarComponent,
    MediaplayerComponent,
    HeaderUserComponent
  ],
})
export class SharedModule { }
