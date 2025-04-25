import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CategoriesComponent } from '../components/categories/categories.component';
import { FeaturedCoursesComponent } from '../components/featured-courses/featured-courses.component';
import { PopularInstructorsComponent } from '../components/popular-instructors/popular-instructors.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CommonModule,
    RouterLink,
    FormsModule,
    CategoriesComponent,
    FeaturedCoursesComponent,
    PopularInstructorsComponent
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  platformName = 'CourseHub';
  currentYear = new Date().getFullYear();
  searchQuery = '';

  // Dữ liệu về featuredCourses, categories và popularInstructors đã được chuyển sang component riêng

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
      imageUrl: 'assets/anglarsource.png'
    }
  ];
}
