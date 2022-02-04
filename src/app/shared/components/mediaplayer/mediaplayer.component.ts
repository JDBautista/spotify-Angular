import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mediaplayer',
  templateUrl: './mediaplayer.component.html',
  styleUrls: ['./mediaplayer.component.css']
})
export class MediaplayerComponent implements OnInit {
  mockCover:any={
    cover:'https://m.media-amazon.com/images/I/71mlUmU1TVL._AC_SL1500_.jpg',
    name:'Nuthin But a G Thang',
    album:'Dr. Dre'
  }
  constructor() { }

  ngOnInit(): void {
  }

}
