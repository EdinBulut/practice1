import { Component, OnInit } from '@angular/core';
import { LanguageService } from 'src/app/shared/services/language.service';
import { icon, latLng, marker, tileLayer } from 'leaflet';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
  language = 'BOS'
  options: any
  layers: any
  
  constructor(private languageService: LanguageService) { }
  
  ngOnInit(): void {
    window.scroll(0,0)
        
    if (localStorage.getItem('language')) {
      this.language = localStorage.getItem('language') as string
    }

    this.languageService.getLanguage()
    .subscribe(data => this.language = data)

    this.options = {
      layers: [
        tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoiZWRpbmJ1bHV0IiwiYSI6ImNrdGl0c282NTE1Z2oybmp5OXdpd3RjNG0ifQ.IzQ1BUhCYwlohdnR1eutGQ', {
          maxZoom: 18,
          id: 'mapbox/streets-v11',
          tileSize: 512,
          zoomOffset: -1,
          accessToken: 'your.mapbox.access.token'
        })
      ],
      zoom: 7,
      center: latLng(44.982999, 16.698572)
    };

      this.layers = [

        marker([44.982999, 16.698572], 
          {
          icon: icon({
            iconSize: [25, 41],
            iconAnchor: [13, 41],
            iconUrl: '../../../assets/images/contact/marker-icon.png',
            shadowUrl: '../../../assets/images/contact/marker-shadow.png'
          })
        }
        )
      ]
  }

}
