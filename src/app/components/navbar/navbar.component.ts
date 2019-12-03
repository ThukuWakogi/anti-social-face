import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from 'src/app/services/authentication/authentication.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  currentUser: any

  constructor(
    private router: Router,
    private authenticationService: AuthenticationService
  ) {
    this
      .authenticationService
      .currentUser
      .subscribe(user => this.currentUser = user)
  }

  ngOnInit() {
  }

  onProfileButtonClick() {
    if (this.currentUser) this.router.navigate(['/user'])
    if (!this.currentUser) this.router.navigate(['/login'])
  }
}
