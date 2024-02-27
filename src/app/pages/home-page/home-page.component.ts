import { Component, HostListener } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent {
  backgroundImage!: string;

  constructor(private router: Router) {
    this.setBackgroundImage();
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    this.setBackgroundImage();
  }

  setBackgroundImage() {
    const screenWidth = window.innerWidth;
    if (screenWidth < 768) {
      this.backgroundImage = 'assets/backgrounds/background-home-mobile.jpg';
    } else if (screenWidth >= 768 && screenWidth <= 1024) {
      this.backgroundImage = 'assets/backgrounds/background-home-tablet.jpg';
    } else {
      this.backgroundImage = 'assets/backgrounds/background-home-desktop.jpg';
    }
  }

  navigateToDestination() {
    this.router.navigate(['/destination']);
  }
}
