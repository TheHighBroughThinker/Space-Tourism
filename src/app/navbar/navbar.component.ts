import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  menuOpen: boolean = false;
  isMobile: boolean = false;
  activeLink: string = ''; // Track active link

  constructor(private router: Router) { }

  ngOnInit() {
    this.detectScreenWidth();
    this.router.events
      .pipe(filter(event => event instanceof NavigationEnd))
      .subscribe(() => {
        this.setActiveNavItem();
      });
  }

  detectScreenWidth() {
    const screenWidth = window.innerWidth;
    this.isMobile = screenWidth <= 767;
  }

  toggleMenu() {
    this.menuOpen = !this.menuOpen;
    const navLinksContainer = document.querySelector('.nav-links-container');
    if (navLinksContainer) {
      if (this.menuOpen) {
        navLinksContainer.classList.add('show-menu');
      } else {
        navLinksContainer.classList.remove('show-menu');
      }
    }
  }

  setActiveNavItem() {
    const currentRoute = this.router.url;
    if (currentRoute === '/home') {
      this.activeLink = 'home';
    } else if (currentRoute === '/destination') {
      this.activeLink = 'destination';
    } else if (currentRoute === '/crew') {
      this.activeLink = 'crew';
    } else if (currentRoute === '/technology') {
      this.activeLink = 'technology';
    }
  }

  navigateToCrew() {
    this.router.navigate(['/crew']);
    this.menuOpen = false;
  }

  navigateToDestination() {
    this.router.navigate(['/destination']);
    this.menuOpen = false;
  }

  navigateToTechnology() {
    this.router.navigate(['/technology']);
    this.menuOpen = false;
  }

  navigateToHome() {
    this.router.navigate(['/home']);
    this.menuOpen = false;
  }
}
