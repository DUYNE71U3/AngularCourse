import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-categories',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './categories.component.html',
  styleUrl: './categories.component.css'
})
export class CategoriesComponent {
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
}
