import { Component } from '@angular/core';

@Component({
  selector: 'app-destination-page',
  templateUrl: './destination-page.component.html',
  styleUrls: ['./destination-page.component.scss']
})

export class DestinationPageComponent {
  activeLink: number = 1;
  destinationData: any[] = [
    {
      name: 'MOON',
      imageUrl: './assets/destination/image-moon.png',
      description: 'See our planet as you’ve never seen it before. A perfect relaxing trip away to help regain perspective and come back refreshed. While you’re there, take in some history by visiting the Luna 2 and Apollo 11 landing sites.',
      avgDistance: '384,400 km',
      estTravelTime: '3 days'
    },
    {
      name: 'MARS',
      imageUrl: './assets/destination/image-mars.png',
      description: 'Don’t forget to pack your hiking boots. You’ll need them to tackle Olympus Mons, the tallest planetary mountain in our solar system. It’s two and a half times the size of Everest!',
      avgDistance: '225 mil. km',
      estTravelTime: '9 months'
    },
    {
      name: 'EUROPA',
      imageUrl: './assets/destination/image-europa.png',
      description: 'The smallest of the four Galilean moons orbiting Jupiter, Europa is a winter lover’s dream. With an icy surface, it’s perfect for a bit of ice skating, curling, hockey, or simple relaxation in your snug wintery cabin.',
      avgDistance: '628 mil. km',
      estTravelTime: '3 years'
    },
    {
      name: 'TITAN',
      imageUrl: './assets/destination/image-titan.png',
      description: 'The only moon known to have a dense atmosphere other than Earth, Titan is a home away from home (just a few hundred degrees colder!). As a bonus, you get striking views of the Rings of Saturn.',
      avgDistance: '1.6 bil. km',
      estTravelTime: '7 years'
    }
  ];

  setActiveLink(index: number, event: MouseEvent) {
    event.preventDefault();
    this.activeLink = index;
  }
}
