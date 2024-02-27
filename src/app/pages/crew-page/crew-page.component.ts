import { Component, ViewChild } from '@angular/core';

@Component({
  selector: 'app-crew-page',
  templateUrl: './crew-page.component.html',
  styleUrls: ['./crew-page.component.scss']
})

export class CrewPageComponent {
  @ViewChild('carousel') carousel: any;

  activeCrewIndex: number = 0;
  crewData: any[] = [
    {
      name: 'Douglas Hurley',
      role: 'Commander',
      bio: 'Douglas Gerald Hurley is an American engineer, former Marine Corps pilot and former NASA astronaut. He launched into space for the third time as commander of Crew Dragon Demo-2.',
      imageUrl: './assets/crew/image-douglas-hurley.png'
    },
    {
      name: 'Mark Shuttleworth',
      role: 'Mission Specialist',
      bio: 'Mark Richard Shuttleworth is the founder and CEO of Canonical, the company behind the Linux-based Ubuntu operating system. Shuttleworth became the first South African to travel to space as a space tourist.',
      imageUrl: './assets/crew/image-mark-shuttleworth.png'
    },
    {
      name: 'Victor Glover',
      role: 'Pilot',
      bio: 'Pilot on the first operational flight of the SpaceX Crew Dragon to the International Space Station. Glover is a commander in the U.S. Navy where he pilots an F/A-18. He was a crew member of Expedition 64, and served as a station systems flight engineer.',
      imageUrl: './assets/crew/image-victor-glover.png'
    },
    {
      name: 'Anousheh Ansari',
      role: 'Flight Engineer',
      bio: 'Anousheh Ansari is an Iranian American engineer and co-founder of Prodea Systems. Ansari was the fourth self-funded space tourist, the first self-funded woman to fly to the ISS, and the first Iranian in space.',
      imageUrl: './assets/crew/image-anousheh-ansari.png'
    }
  ];

  private slidesInterval: any;

  ngAfterViewInit() {
    this.startSlides();
  }

  ngOnDestroy() {
    clearInterval(this.slidesInterval);
  }

  startSlides() {
    this.slidesInterval = setInterval(() => {
      this.nextSlide();
    }, 4000);
  }

  nextSlide() {
    this.activeCrewIndex = (this.activeCrewIndex + 1) % this.crewData.length;
    this.scrollToSlide();
  }

  setActiveCrew(index: number) {
    this.activeCrewIndex = index;
    clearInterval(this.slidesInterval);
    this.startSlides();
  }

  scrollToSlide() {
    const slideWidth = this.carousel.nativeElement.offsetWidth;
    this.carousel.nativeElement.scrollLeft = this.activeCrewIndex * slideWidth;
  }
}
