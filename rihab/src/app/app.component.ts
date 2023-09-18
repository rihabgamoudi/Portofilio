import { Component , AfterViewInit } from '@angular/core';

declare var $: any;
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent  implements AfterViewInit{
  title = 'portofolio-stage';

  ngAfterViewInit() {
    $('.owl-carousel').owlCarousel({
      loop: true,
      nav: true,
      items: 1
    });
  }
}