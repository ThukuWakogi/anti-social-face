import { Component, OnInit } from '@angular/core'
import { FormGroup, FormControl, Validators } from '@angular/forms'
import { AuthenticationService } from 'src/app/services/authentication/authentication.service'
import { Router } from '@angular/router'
import { first } from 'rxjs/operators'

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  showPassword = false
  sendingRequest = false
  submitted = false
  registerForm: FormGroup

  constructor(
    private authenticationService: AuthenticationService,
    private router: Router
  ) { }

  ngOnInit() {
    this.registerForm = new FormGroup({
      first_name: new FormControl('', [Validators.required]),
      last_name: new FormControl('', [Validators.required]),
      username: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required]),
      confirmPassword: new FormControl('', [Validators.required]),
    })
  }

  onSubmit() {
    this.submitted = true
    console.log(this.registerForm.value)

    if (this.registerForm.invalid) return

    if (this.registerForm.get('password').value !== this.registerForm.get('confirmPassword').value) return

    this.sendingRequest = true
    this
      .authenticationService
      .register(this.registerForm.value)
      .pipe(first())
      .subscribe(
        (data: any) => {this.router.navigate([''])},
        (error: any) => {
          console.log({error})
          this.sendingRequest = false
        }
      )
  }
}
