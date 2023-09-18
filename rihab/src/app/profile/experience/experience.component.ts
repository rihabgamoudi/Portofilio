import { AfterViewInit, Component,  } from '@angular/core';
import { ProfileService } from '../profile.service';
import 'owl.carousel';
declare var $: any;
@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.scss']
})
export class ExperienceComponent implements AfterViewInit{

workexp: any

  constructor(private profileService:ProfileService) { }

  
    
  ngAfterViewInit() {
    $('.owl-carousel').owlCarousel({
      loop: true,
      nav: true,
      items: 1
    });
  }
   
}
