import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-featured-courses',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './featured-courses.component.html',
  styleUrl: './featured-courses.component.css'
})
export class FeaturedCoursesComponent {
  featuredCourses = [
    {
      id: 1,
      title: 'Complete Web Development Bootcamp',
      instructor: 'Jane Smith',
      rating: 4.8,
      reviewCount: 15420,
      price: 89.99,
      discountPrice: 19.99,
      imageUrl: 'assets/webfeature.png',
      category: 'Web Development',
      level: 'Beginner to Advanced',
      duration: '52 hours',
      bestseller: true
    },
    {
      id: 2,
      title: 'Machine Learning A-Z: Hands-On Python & R',
      instructor: 'Robert Johnson',
      rating: 4.7,
      reviewCount: 8923,
      price: 129.99,
      discountPrice: 29.99,
      imageUrl: 'assets/aifeature.png',
      category: 'Data Science',
      level: 'Intermediate',
      duration: '48 hours',
      bestseller: true
    },
    {
      id: 3,
      title: 'The Complete Financial Analyst Course',
      instructor: 'Michael Brown',
      rating: 4.6,
      reviewCount: 5732,
      price: 99.99,
      discountPrice: 24.99,
      imageUrl: 'assets/financialfeature.png',
      category: 'Finance',
      level: 'Beginner',
      duration: '32 hours',
      bestseller: false
    },
    {
      id: 4,
      title: 'Ultimate Adobe Photoshop Training: From Beginner to Pro',
      instructor: 'Lisa Anderson',
      rating: 4.9,
      reviewCount: 7832,
      price: 119.99,
      discountPrice: 27.99,
      imageUrl: 'assets/adobefeature.png',
      category: 'Design',
      level: 'All Levels',
      duration: '36 hours',
      bestseller: true
    }
  ];
}
