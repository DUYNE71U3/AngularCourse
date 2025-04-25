import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { PostService } from '../../services/post.service';
import { Post } from '../../models/post.model';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-post-detail',
  standalone: true,
  imports: [CommonModule, RouterLink, HttpClientModule],
  templateUrl: './post-detail.component.html',
  styleUrl: './post-detail.component.css'
})
export class PostDetailComponent implements OnInit {
  post: Post | null = null;
  loading = false;
  error: string | null = null;

  constructor(
    private route: ActivatedRoute,
    private postService: PostService
  ) { }

  ngOnInit(): void {
    this.loadPostDetail();
  }

  loadPostDetail(): void {
    this.loading = true;
    this.error = null;

    // Lấy id từ tham số URL
    const id = Number(this.route.snapshot.paramMap.get('id'));

    if (isNaN(id)) {
      this.error = 'ID bài viết không hợp lệ';
      this.loading = false;
      return;
    }

    // Gọi service để lấy chi tiết bài viết
    this.postService.getPostById(id).subscribe({
      next: (data) => {
        this.post = data;
        this.loading = false;
      },
      error: (err) => {
        this.error = 'Không thể tải thông tin bài viết. Vui lòng thử lại sau.';
        this.loading = false;
        console.error('Lỗi khi tải chi tiết bài viết:', err);
      }
    });
  }
}
