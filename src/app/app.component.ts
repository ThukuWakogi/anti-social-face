import { Component } from '@angular/core';
import { AuthenticationService } from './services/authentication/authentication.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'anti-social-face';

  constructor(private authenticationService: AuthenticationService) {
    this.authenticationService.getLoggedInUser()
  }
}
