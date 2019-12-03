import { Injectable } from '@angular/core'
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router'
import { Observable } from 'rxjs'
import { AuthenticationService } from 'src/app/services/authentication/authentication.service'

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private router: Router, private authenticationService: AuthenticationService) {
    this
      .authenticationService
      .currentUser
      .subscribe(user => {
        console.log({user})
        if (user) this.router.navigate([''])
      })
  }

  canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    if (this.authenticationService.currentUserValue) return true

    this.router.navigate(['login', { queryParams: { returnUrl: state.url } }])

    return false
  }
}
