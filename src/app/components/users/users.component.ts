import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserService } from '../../services/user.service';
import { User } from '../../models/user.model';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-users',
  standalone: true,
  imports: [CommonModule, HttpClientModule, ReactiveFormsModule, FormsModule],
  providers: [UserService],
  templateUrl: './users.component.html',
  styleUrl: './users.component.css'
})
export class UsersComponent implements OnInit, OnDestroy {
  users: User[] = [];
  loading: boolean = false;
  error: string | null = null;
  searchTerm: string = '';
  filteredUsers: User[] = [];
  Math = Math; // Để sử dụng Math trong template

  // Khai báo FormGroup thay vì model
  userForm!: FormGroup;

  // Thêm Subject để clean up subscriptions
  private destroy$ = new Subject<void>();

  // Mảng các màu cho avatar
  private avatarColors: string[] = [
    '#3498db', '#e74c3c', '#2ecc71', '#f39c12', '#9b59b6',
    '#1abc9c', '#d35400', '#34495e', '#16a085', '#27ae60',
    '#2980b9', '#8e44ad', '#f1c40f', '#e67e22', '#c0392b'
  ];

  // Mảng trạng thái người dùng
  private statusClasses: string[] = [
    'bg-success-soft', 'bg-warning-soft', 'bg-info-soft', 'bg-danger-soft'
  ];

  private statusTexts: string[] = [
    'Đang hoạt động', 'Chờ xử lý', 'Mới', 'Đã khóa'
  ];

  constructor(
    private userService: UserService,
    private fb: FormBuilder
  ) {}

  ngOnInit(): void {
    this.getUsers();
    this.initForm();
  }

  // Khởi tạo Reactive Form
  initForm(): void {
    this.userForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(3)]],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', [Validators.required, Validators.pattern(/^(0|\+84)[3|5|7|8|9][0-9]{8}$/)]],
      website: ['', Validators.pattern(/^(https?:\/\/)?(www\.)?[a-zA-Z0-9-]+\.[a-z]{2,}(\.[a-z]{2,})?$/)],
      address: this.fb.group({
        street: [''],
        suite: [''],
        city: ['', Validators.required],
        zipcode: ['']
      }),
      company: this.fb.group({
        name: [''],
        catchPhrase: [''],
        bs: ['']
      })
    });
  }

  // Getter cho các form controls để dễ dàng truy cập trong template
  get f() {
    return this.userForm.controls;
  }

  get addressControls() {
    return (this.userForm.get('address') as FormGroup).controls;
  }

  // Khởi tạo user mới với giá trị mặc định - không cần thiết với Reactive Form nhưng giữ lại để tái sử dụng nếu cần
  initNewUser(): User {
    return {
      id: 0,
      name: '',
      username: '',
      email: '',
      address: {
        street: '',
        suite: '',
        city: '',
        zipcode: '',
        geo: { lat: '', lng: '' }
      },
      phone: '',
      website: '',
      company: {
        name: '',
        catchPhrase: '',
        bs: ''
      }
    };
  }

  getUsers(): void {
    this.loading = true;
    this.userService.getAllUsers()
      .pipe(takeUntil(this.destroy$))
      .subscribe({
        next: (data) => {
          // Giới hạn chỉ hiển thị 10 user đầu tiên
          this.users = data.slice(0, 10);
          this.filteredUsers = [...this.users];
          this.loading = false;
        },
        error: (err) => {
          this.error = 'Có lỗi xảy ra khi tải dữ liệu người dùng';
          this.loading = false;
          console.error('Lỗi khi lấy danh sách người dùng:', err);
        }
      });
  }

  onSearch(): void {
    if (!this.searchTerm) {
      this.filteredUsers = [...this.users];
      return;
    }

    this.filteredUsers = this.users.filter(user =>
      user.name.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
      user.username.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
      user.email.toLowerCase().includes(this.searchTerm.toLowerCase())
    );
  }

  // Method mới để xử lý form submit với ReactiveForm validation
  submitForm(): void {
    if (this.userForm.invalid) {
      // Đánh dấu tất cả các trường đã được chạm vào để hiển thị lỗi
      this.userForm.markAllAsTouched();
      return;
    }

    // Xây dựng user từ giá trị form
    const formValues = this.userForm.value;
    const newUser: User = {
      ...formValues,
      id: Math.floor(Math.random() * 1000) + 10,
      username: formValues.name.toLowerCase().replace(/\s+/g, '_')
    };

    // Gọi service để thêm người dùng
    this.userService.addUser(newUser)
      .pipe(takeUntil(this.destroy$))
      .subscribe({
        next: (user) => {
          this.users.unshift(user);
          this.filteredUsers = [...this.users];

          // Reset form
          this.userForm.reset();
          this.initForm();

          // Hiển thị thông báo thành công
          console.log('Người dùng đã được thêm thành công!');
        },
        error: (err) => {
          this.error = 'Có lỗi xảy ra khi thêm người dùng';
          console.error('Lỗi khi thêm người dùng:', err);
        }
      });
  }

  /**
   * Lấy chữ cái đầu tiên của tên người dùng làm avatar
   */
  getInitials(name: string): string {
    if (!name) return '';

    const nameParts = name.split(' ').filter(part => part.length > 0);

    if (nameParts.length === 0) return '';
    if (nameParts.length === 1) return nameParts[0].charAt(0).toUpperCase();

    // Lấy chữ cái đầu của từ đầu tiên và từ cuối cùng
    return (
      nameParts[0].charAt(0).toUpperCase() +
      nameParts[nameParts.length - 1].charAt(0).toUpperCase()
    );
  }

  /**
   * Lấy màu cho avatar dựa trên tên người dùng
   */
  getAvatarColor(name: string): string {
    if (!name) return this.avatarColors[0];

    // Tạo một số từ tên bằng cách cộng mã ASCII của các ký tự
    const hashCode = name.split('').reduce((acc, char) => {
      return acc + char.charCodeAt(0);
    }, 0);

    // Lấy màu dựa trên phần dư khi chia hashCode cho số lượng màu
    return this.avatarColors[hashCode % this.avatarColors.length];
  }

  /**
   * Lấy class cho badge trạng thái
   */
  getStatusClass(index: number): string {
    return this.statusClasses[index % this.statusClasses.length];
  }

  /**
   * Lấy text cho trạng thái
   */
  getStatusText(index: number): string {
    return this.statusTexts[index % this.statusTexts.length];
  }

  // Thêm ngOnDestroy để clean up subscriptions
  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
