import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthenticationService } from 'src/app/services/authentication/authentication.service';
import { first } from 'rxjs/operators'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  showPassword = true
  submitted = false
  sendingRequest = false
  returnUrl: string
  error: any
  success: any
  loginForm: FormGroup

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private authenticationService: AuthenticationService
  ) { }

  ngOnInit() {
    this.loginForm = new FormGroup({
      username: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required])
    })
    this.returnUrl = this.route.snapshot.queryParams.returnUrl || ''
  }

  onSubmit() {
    this.submitted = true
    this.error = null
    this.success = null

    if (this.loginForm.invalid) return

    this.sendingRequest = true
    this
      .authenticationService
      .login(this.loginForm.value)
      .pipe(first())
      .subscribe(
        (data: any) => {this.router.navigate([this.returnUrl])},
        (error: any) => {
          console.log({error})
          this.sendingRequest = false
        }
      )
  }
}
