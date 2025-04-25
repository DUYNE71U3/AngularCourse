import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-popular-instructors',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './popular-instructors.component.html',
  styleUrl: './popular-instructors.component.css'
})
export class PopularInstructorsComponent {
  popularInstructors = [
    {
      name: 'David Miller',
      specialty: 'Web Development',
      courseCount: 15,
      studentCount: 258340,
      rating: 4.9,
      imageUrl: 'assets/nguoi1.png'
    },
    {
      name: 'Sarah Johnson',
      specialty: 'Data Science',
      courseCount: 8,
      studentCount: 142850,
      rating: 4.8,
      imageUrl: 'assets/nguoi1.png'
    },
    {
      name: 'Michael Chen',
      specialty: 'Mobile Development',
      courseCount: 12,
      studentCount: 187620,
      rating: 4.7,
      imageUrl: 'assets/nguoi1.png'
    },
    {
      name: 'Jessica Williams',
      specialty: 'Design & Creativity',
      courseCount: 10,
      studentCount: 162140,
      rating: 4.9,
      imageUrl: 'assets/nguoi1.png'
    }
  ];
}
