import { Component, EventEmitter, Output } from '@angular/core';
import { ApiService } from '../services/api.service';
import { Router } from '@angular/router';


@Component({
  selector: 'page-header',
  templateUrl: './page-header.component.html',
  styleUrls: ['./page-header.component.css']
})
export class PageHeaderComponent {

  @Output() menuClicked =new EventEmitter<boolean>();

  constructor(public api:ApiService, private router: Router){}

  logOut()
  {
    this.api.deleteToken();
    setTimeout(() => {
      this.router.navigate(['/login']); // Redirect to login
      // window.location.reload(); // Reload to initialize components
    }, 1000);
    
  }
}
