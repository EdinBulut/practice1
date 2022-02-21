import { AfterViewInit, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit, AfterViewInit {

  constructor() { }

  ngOnInit(): void {
  }
  
  ngAfterViewInit(): void {
    window.scroll(0,0)
  }

}
