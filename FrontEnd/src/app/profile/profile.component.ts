import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

export interface TableElement {
  name: string;
  value: string | undefined;
}

@Component({
  selector: 'profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  dataSource: TableElement[] = [];
  columns: string[] = ['name', 'value'];
  profileForm: FormGroup;
  userId: number | undefined;

  constructor(private api: ApiService, private fb: FormBuilder) {
    this.profileForm = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      mobile: ['', [Validators.required, Validators.pattern('[0-9]{10}')]],
      password: [''] // Optional: Add validation for passwords if needed
    });
  }

  ngOnInit(): void {
    // Get user info from token (assuming you have a method to decode JWT or get user data)
    let user = this.api.getTokenUserInfo();

    // Store userId for later use
    this.userId = user?.id;

    // Populate dataSource with user data
    this.dataSource = [
      { name: 'Name', value: user?.firstName + ' ' + user?.lastName },
      { name: 'Email', value: user?.email ?? '' },
      { name: 'Mobile', value: user?.mobile },
      { name: 'Blocked', value: this.blockedStatus() },
      { name: 'Active', value: this.activeStatus() }
    ];

    // Populate form with existing user details
    this.profileForm.patchValue({
      firstName: user?.firstName,
      lastName: user?.lastName,
      mobile: user?.mobile
    });
  }

  blockedStatus(): string {
    let blocked = this.api.getTokenUserInfo()?.blocked;
    return blocked ? 'YES, you are BLOCKED' : 'NO, you are not BLOCKED!';
  }

  activeStatus(): string {
    let active = this.api.getTokenUserInfo()?.active;
    return active ? 'YES, your account is ACTIVE' : 'No, your account is not ACTIVE!';
  }

  updateProfile(): void {
    if (this.profileForm.invalid) {
      alert('Please fill all required fields correctly!');
      return;
    }

    // Ensure userId is included in the data sent to the backend
    const user = {
      id: this.userId,  // Include user ID
      ...this.profileForm.value,  // Directly use the form data
    };

    // Call the API to update profile
    this.api.updateProfile(user).subscribe({
      next: (response) => {
        alert('Profile updated successfully!');

        // Refresh dataSource with updated profile information
        this.dataSource = [
          { name: 'Name', value: response.firstName + " " + response.lastName },
          { name: 'Email', value: response.email ?? "" },
          { name: 'Mobile', value: response.mobile },
        ];
      },
      error: (error) => {
        alert('Failed to update profile. Please try again later.');
        console.error(error);
      },
    });
  }
}
