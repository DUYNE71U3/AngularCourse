import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterLink, FormsModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  platformName = 'CourseHub';
  currentYear = new Date().getFullYear();
  searchQuery = '';

  featuredCourses = [
    {
      id: 1,
      title: 'Complete Web Development Bootcamp',
      instructor: 'Jane Smith',
      rating: 4.8,
      reviewCount: 15420,
      price: 89.99,
      discountPrice: 19.99,
      imageUrl: 'https://source.unsplash.com/random/800x600/?web',
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
      imageUrl: 'https://source.unsplash.com/random/800x600/?ai',
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
      imageUrl: 'https://source.unsplash.com/random/800x600/?finance',
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
      imageUrl: 'https://source.unsplash.com/random/800x600/?design',
      category: 'Design',
      level: 'All Levels',
      duration: '36 hours',
      bestseller: true
    }
  ];

  categories = [
    {
      name: 'Web Development',
      courseCount: 482,
      icon: '💻',
      imageUrl: 'https://source.unsplash.com/random/300x200/?webdev'
    },
    {
      name: 'Data Science',
      courseCount: 327,
      icon: '📊',
      imageUrl: 'https://source.unsplash.com/random/300x200/?datascience'
    },
    {
      name: 'Business',
      courseCount: 518,
      icon: '📈',
      imageUrl: 'https://source.unsplash.com/random/300x200/?business'
    },
    {
      name: 'IT & Software',
      courseCount: 631,
      icon: '🖥️',
      imageUrl: 'https://source.unsplash.com/random/300x200/?software'
    },
    {
      name: 'Design',
      courseCount: 412,
      icon: '🎨',
      imageUrl: 'https://source.unsplash.com/random/300x200/?design'
    },
    {
      name: 'Marketing',
      courseCount: 295,
      icon: '📱',
      imageUrl: 'https://source.unsplash.com/random/300x200/?marketing'
    }
  ];

  popularInstructors = [
    {
      name: 'David Miller',
      specialty: 'Web Development',
      courseCount: 15,
      studentCount: 258340,
      rating: 4.9,
      imageUrl: 'https://source.unsplash.com/random/150x150/?man1'
    },
    {
      name: 'Sarah Johnson',
      specialty: 'Data Science',
      courseCount: 8,
      studentCount: 142850,
      rating: 4.8,
      imageUrl: 'https://source.unsplash.com/random/150x150/?woman1'
    },
    {
      name: 'Michael Chen',
      specialty: 'Mobile Development',
      courseCount: 12,
      studentCount: 187620,
      rating: 4.7,
      imageUrl: 'https://source.unsplash.com/random/150x150/?man2'
    },
    {
      name: 'Jessica Williams',
      specialty: 'Design & Creativity',
      courseCount: 10,
      studentCount: 162140,
      rating: 4.9,
      imageUrl: 'https://source.unsplash.com/random/150x150/?woman2'
    }
  ];

  testimonials = [
    {
      name: 'James Wilson',
      course: 'Complete Web Development Bootcamp',
      text: 'This course completely changed my career path. I went from knowing nothing about web development to landing a full-stack developer job in just 6 months. The instructor explains everything clearly and the projects are incredibly practical.',
      imageUrl: 'https://source.unsplash.com/random/100x100/?man3',
      rating: 5
    },
    {
      name: 'Emily Rodriguez',
      course: 'Machine Learning A-Z',
      text: 'As someone with a background in statistics but no programming experience, this course was perfect. The explanations are thorough and the hands-on projects really helped solidify my understanding of complex machine learning concepts.',
      imageUrl: 'https://source.unsplash.com/random/100x100/?woman3',
      rating: 5
    }
  ];

  limitedTimeOffers = [
    {
      title: 'Flash Sale: 24 Hours Only',
      description: 'Get 75% off on all Data Science courses',
      expiryDate: 'Ends in 11:23:45',
      imageUrl: 'https://source.unsplash.com/random/400x200/?clock'
    }
  ];
}
