import { Component, OnInit } from '@angular/core'
import { AuthenticationService } from 'src/app/services/authentication/authentication.service'
import { Router } from '@angular/router'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private authenticationService: AuthenticationService, private router: Router) {
    this
      .authenticationService
      .currentUser
      .subscribe(user => {
        console.log({user})
        if (user && user.neighborhood === null) this.router.navigate(['/chooseneighborhood'])
      })}

  ngOnInit() {
  }
}
