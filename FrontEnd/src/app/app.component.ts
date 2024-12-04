import { Component } from '@angular/core';
import { ApiService } from '../app/services/api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'FrontEnd';

  userType: string | null = null; // Adjust this logic based on your authentication
  showLogin: boolean = true; // Show Login by default

  toggleForm(): void {
    this.showLogin = !this.showLogin; // Toggle between Login and Register
  }
}


