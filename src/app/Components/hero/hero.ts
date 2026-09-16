import { Component, HostListener, OnInit, OnDestroy, Inject, PLATFORM_ID, NgZone } from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { RouterLink } from '@angular/router';
import { Navbar } from '../navbar/navbar';

export interface HeroSlide {
  image: string;
  alt: string;
  badge: string;
  titlePrefix: string;
  titleHighlight: string;
  subtext: string;
  primaryBtnText: string;
  primaryBtnLink: string;
  secondaryBtnText: string;
  secondaryBtnLink: string;
}

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [CommonModule, RouterLink, Navbar],
  templateUrl: './hero.html',
  styleUrl: './hero.css',
})
export class Hero implements OnInit, OnDestroy {
  isScrolled = false;
  menuOpen = false;

  slides: HeroSlide[] = [
    {
      image: 'images/hero-slide-1.jpg',
      alt: 'Dedicated student writing and learning in classroom',
      badge: 'Admissions Open 2026/2027 Academic Session',
      titlePrefix: 'Empowering Young Minds,',
      titleHighlight: 'Building Tomorrows Leaders',
      subtext: 'At Our Light Comprehensive College, we provide an inspiring learning environment combining academic excellence, innovative STEM training, and moral discipline to prepare every child for global success.',
      primaryBtnText: 'Apply for Admission',
      primaryBtnLink: '/apply',
      secondaryBtnText: 'Explore Academics',
      secondaryBtnLink: '#academics'
    },
    {
      image: 'images/IMG_4343.JPG',
      alt: 'Enthusiastic students reading together in school library',
      badge: 'Holistic Education Creche to College Prep',
      titlePrefix: 'Inspiring Curiosity,',
      titleHighlight: 'Nurturing Global Achievers',
      subtext: 'Experience a vibrant school culture where hands-on inquiry, collaborative learning, and dedicated mentorship empower students to excel academically, socially, and creatively.',
      primaryBtnText: 'Apply For Admission',
      primaryBtnLink: '/apply',
      secondaryBtnText: 'Discover More',
      secondaryBtnLink: '#campus-life'
    }
  ];

  currentSlide = 0;
  prevSlide = -1;
  slideDuration = 6000;
  progressAnimating = true;
  private autoSlideInterval: any;
  private isBrowser: boolean;

  constructor(
    @Inject(PLATFORM_ID) platformId: Object,
    private ngZone: NgZone
  ) {
    this.isBrowser = isPlatformBrowser(platformId);
  }

  ngOnInit(): void {
    this.startAutoSlide();
  }

  ngOnDestroy(): void {
    this.stopAutoSlide();
  }

  toggleMenu() {
    this.menuOpen = !this.menuOpen;
  }

  closeMenu() {
    this.menuOpen = false;
  }

  startAutoSlide() {
    if (!this.isBrowser) return;
    this.stopAutoSlide();
    this.progressAnimating = true;

    this.ngZone.runOutsideAngular(() => {
      this.autoSlideInterval = setInterval(() => {
        this.ngZone.run(() => {
          this.next();
        });
      }, this.slideDuration);
    });
  }

  stopAutoSlide() {
    if (this.autoSlideInterval) {
      clearInterval(this.autoSlideInterval);
      this.autoSlideInterval = null;
    }
  }

  goToSlide(index: number) {
    if (index === this.currentSlide) return;
    this.prevSlide = this.currentSlide;
    this.currentSlide = index;
    this.restartSlideTimer();
  }

  next() {
    this.prevSlide = this.currentSlide;
    this.currentSlide = (this.currentSlide + 1) % this.slides.length;
    this.restartSlideTimer();
  }

  prev() {
    this.prevSlide = this.currentSlide;
    this.currentSlide = (this.currentSlide - 1 + this.slides.length) % this.slides.length;
    this.restartSlideTimer();
  }

  private restartSlideTimer() {
    this.progressAnimating = false;
    setTimeout(() => {
      this.progressAnimating = true;
    }, 20);
    this.startAutoSlide();
  }

  @HostListener('window:scroll', [])
  onWindowScroll() {
    if (this.isBrowser) {
      this.isScrolled = window.scrollY > 50;
    }
  }
}

