import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { Navbar } from '../../Components/navbar/navbar';
import { Footer } from '../../Components/footer/footer';

export interface FaqItem {
  question: string;
  answer: string;
  isOpen: boolean;
}

@Component({
  selector: 'app-contact-page',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink, Navbar, Footer],
  templateUrl: './contact.html',
  styleUrl: './contact.css',
})
export class ContactPage {
  formData = {
    parentName: '',
    email: '',
    phone: '',
    inquiryType: 'admission',
    studentGrade: 'JSS 1',
    message: '',
  };

  submitted = false;
  submitting = false;

  faqs: FaqItem[] = [
    {
      question: 'When does admission for the 2026/2027 Academic Session open?',
      answer:
        'Admissions for JSS 1, JSS 2, and SSS 1 are currently ongoing. Entrance examinations and scholarship screening tests take place on the first Saturday of every month at our Egan campus.',
      isOpen: true,
    },
    {
      question: 'Does OUR LIGHT COMPREHENSIVE COLLEGE  offer both Day and Boarding options?',
      answer:
        'Yes! We offer premium modern boarding facilities with 24/7 power, CCTV security, resident house parents, and healthcare personnel, as well as day schooling with air-conditioned bus shuttle services across Egan, Igando, Isheri, Alimosho, and environs.',
      isOpen: false,
    },
    {
      question: 'What curriculum does OUR LIGHT COMPREHENSIVE COLLEGE  teach?',
      answer:
        'We run an integrated dual curriculum: the Nigerian National Curriculum (preparing candidates for BECE, WAEC/WASSCE, and NECO) and the British Cambridge International Curriculum (IGCSE & Checkpoint).',
      isOpen: false,
    },
    {
      question: 'What are the criteria for transfer students into JSS 2 or SSS 1?',
      answer:
        'Transfer students are required to submit their last two years of academic transcripts from their previous school and sit for a placement test in English, Mathematics, and General Science / aptitude.',
      isOpen: false,
    },
    {
      question: 'Can parents schedule a weekday campus tour?',
      answer:
        'Absolutely. Guided campus tours are conducted Mondays through Fridays between 9:00 AM and 2:00 PM. Please book via this contact form or call 08027779122.',
      isOpen: false,
    },
  ];

  toggleFaq(index: number): void {
    this.faqs[index].isOpen = !this.faqs[index].isOpen;
  }

  onSubmit(): void {
    if (!this.formData.parentName || !this.formData.email || !this.formData.phone) {
      return;
    }

    this.submitting = true;
    setTimeout(() => {
      this.submitting = false;
      this.submitted = true;
      this.formData = {
        parentName: '',
        email: '',
        phone: '',
        inquiryType: 'admission',
        studentGrade: 'JSS 1',
        message: '',
      };
    }, 800);
  }

  resetForm(): void {
    this.submitted = false;
  }
}
