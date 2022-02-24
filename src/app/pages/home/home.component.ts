import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  imageSrc1 = `./assets/images/old-images/old-images-4.jpg`
  
  constructor() { }

  ngOnInit(): void {
    this.imageSrc1
    // console.log(this.imageSrc1)
    window.scroll(0,0)
  }
   
}
