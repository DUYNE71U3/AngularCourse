import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-detailcourse',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './detailcourse.component.html',
  styleUrl: './detailcourse.component.css'
})
export class DetailcourseComponent implements OnInit {
  courseId: number = 0;
  course: any;

  // Sample course data - in a real app, this would come from a service
  courses = [
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
      bestseller: true,
      description: 'Learn web development from scratch and build responsive websites using HTML5, CSS3, JavaScript, React, Node.js, and more. This comprehensive bootcamp is designed to take you from beginner to job-ready developer.',
      topics: ['HTML5', 'CSS3', 'JavaScript', 'React', 'Node.js', 'MongoDB', 'Express', 'Responsive Design']
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
      bestseller: true,
      description: 'Master Machine Learning algorithms including Regression, Classification, Clustering, and Deep Learning. Implement techniques using Python and R with real-world datasets.',
      topics: ['Python', 'R', 'Data Preprocessing', 'Regression', 'Classification', 'Clustering', 'Neural Networks']
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
      bestseller: false,
      description: 'Become a financial analyst with this comprehensive course covering Excel, financial statement analysis, investment banking, financial modeling, and valuation techniques.',
      topics: ['Excel', 'Financial Analysis', 'Investment Banking', 'Financial Modeling', 'Valuation']
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
      bestseller: true,
      description: 'Master Adobe Photoshop from beginner to professional level. Learn photo editing, retouching, compositing, and digital art techniques used by industry professionals.',
      topics: ['Photoshop Basics', 'Photo Editing', 'Retouching', 'Compositing', 'Digital Art', 'Typography']
    }
  ];

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    // Get the course ID from the route parameter
    this.route.paramMap.subscribe(params => {
      const id = params.get('id');
      if (id) {
        this.courseId = +id; // Convert string to number
        this.getCourseDetails(this.courseId);
      }
    });
  }

  getCourseDetails(id: number) {
    // In a real app, this would be a service call to get course details from an API
    this.course = this.courses.find(course => course.id === id);
  }
}
