import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { Navbar } from '../../Components/navbar/navbar';
import { Footer } from '../../Components/footer/footer';
import { Gallery } from '../../Components/gallery/gallery';

export interface GalleryPhoto {
  id: number;
  title: string;
  category: 'all' | 'academics' | 'sports' | 'arts' | 'innovation' | 'events';
  categoryLabel: string;
  image: string;
  description: string;
  badge: string;
}

@Component({
  selector: 'app-gallery-page',
  standalone: true,
  imports: [CommonModule, RouterLink, Navbar, Footer, Gallery],
  templateUrl: './gallery.html',
  styleUrl: './gallery.css',
})
export class GalleryPage {
  activeCategory = 'all';
  selectedPhoto: GalleryPhoto | null = null;

  categories = [
    { id: 'all', label: 'ALL MOMENTS' },
    { id: 'academics', label: 'ACADEMICS & LABS' },
    { id: 'sports', label: 'SPORTS & ATHLETICS' },
    { id: 'arts', label: 'ARTS & CULTURE' },
    { id: 'innovation', label: 'STEM & ROBOTICS' },
    { id: 'events', label: 'SCHOOL EVENTS' },
  ];

  photos: GalleryPhoto[] = [
    {
      id: 1,
      title: 'Advanced Science Laboratory Practicals',
      category: 'academics',
      categoryLabel: 'SCIENCE & RESEARCH',
      image: 'images/campus-science-lab.jpg',
      description:
        'Students conducting hands-on chemistry and biology experiments using modern digital microscopes and precision equipment.',
      badge: 'STEM Practical',
    },
    {
      id: 2,
      title: 'Robotics Assembly & Code Studio',
      category: 'innovation',
      categoryLabel: 'STEM & ROBOTICS',
      image: 'images/campus-computer-lab.jpg',
      description:
        'Senior secondary scholars coding autonomous algorithms and assembling robotic hardware for national competitions.',
      badge: 'Tech Innovation',
    },
    {
      id: 3,
      title: 'Ultra-Modern E-Library & Research Hub',
      category: 'academics',
      categoryLabel: 'ACADEMIC DISCOVERY',
      image: 'images/campus-library.jpg',
      description:
        'A quiet sanctuary of scholarship housing over 12,000 reference books and high-speed digital research terminals.',
      badge: 'Resource Center',
    },
    {
      id: 4,
      title: 'Inter-House Athletics & Football Championship',
      category: 'sports',
      categoryLabel: 'SPORTS ARENA',
      image: 'images/campus-sports.jpg',
      description:
        'Intense competition and sportsmanship on our FIFA-dimension pitch during the annual OUR LIGHT COMPREHENSIVE COLLEGE  Games.',
      badge: 'Athletics Day',
    },
    {
      id: 5,
      title: 'State Invitational Debate Championship',
      category: 'arts',
      categoryLabel: 'PUBLIC SPEAKING',
      image: 'images/activity-debate.JPG',
      description:
        'Our distinguished debating society articulating compelling policy arguments at the Lagos State Championship.',
      badge: 'Gold Medallists',
    },
    {
      id: 6,
      title: 'Youth Symphony Orchestra & Chamber Rehearsal',
      category: 'arts',
      categoryLabel: 'MUSIC & ARTS',
      image: 'images/IMG_4338.JPG',
      description:
        'Music academy students perfecting classical and contemporary African compositions in the performing arts auditorium.',
      badge: 'Creative Arts',
    },
    {
      id: 7,
      title: 'Interactive Collaborative Classroom Session',
      category: 'academics',
      categoryLabel: 'LEARNING CULTURE',
      image: 'images/IMG_4344.JPG',
      description:
        'Dynamic group inquiry and peer-assisted problem solving in our modern air-conditioned learning suites.',
      badge: 'Active Classroom',
    },
    {
      id: 8,
      title: 'Focused Senior Secondary Prep & Mentorship',
      category: 'academics',
      categoryLabel: 'COLLEGE PREP',
      image: 'images/hero-slide-1.jpg',
      description:
        'One-on-one academic consultation and exam preparation guiding students toward stellar WAEC and IGCSE scores.',
      badge: 'Academic Mentorship',
    },
    {
      id: 9,
      title: 'Basketball Tournament & Team Spirit',
      category: 'sports',
      categoryLabel: 'COURT SPORTS',
      image: 'images/IMG_4342.JPG',
      description:
        'OUR LIGHT COMPREHENSIVE COLLEGE  basketball squad displaying tactical precision and agility on our outdoor courts.',
      badge: 'Championship Match',
    },
    {
      id: 10,
      title: 'Applied Technology & Digital Engineering',
      category: 'innovation',
      categoryLabel: 'DIGITAL SKILLS',
      image: 'images/IMG_4343.JPG',
      description:
        'Scholars learning web design, UI/UX thinking, and Python programming in our fully equipped computer lab.',
      badge: 'Coding Bootcamp',
    },
    {
      id: 11,
      title: 'Annual Speech & Valedictory Ceremony',
      category: 'events',
      categoryLabel: 'SCHOOL CEREMONY',
      image: 'images/IMG_4340.JPG',
      description:
        'Celebrating outstanding achievements, academic prizes, and valedictory honours with proud parents and alumni.',
      badge: 'Valedictory 2026',
    },
    {
      id: 12,
      title: 'Student Leadership Council & Assembly',
      category: 'events',
      categoryLabel: 'LEADERSHIP',
      image: 'images/IMG_4345.JPG',
      description:
        'Empowering prefects and student guild executives with civic responsibility, team leadership, and school governance.',
      badge: 'Student Guild',
    },
  ];

  get filteredPhotos(): GalleryPhoto[] {
    if (this.activeCategory === 'all') {
      return this.photos;
    }
    return this.photos.filter((p) => p.category === this.activeCategory);
  }

  setCategory(cat: string): void {
    this.activeCategory = cat;
  }

  openLightbox(photo: GalleryPhoto): void {
    this.selectedPhoto = photo;
  }

  closeLightbox(): void {
    this.selectedPhoto = null;
  }
}
