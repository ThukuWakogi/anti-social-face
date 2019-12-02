import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-post-form',
  templateUrl: './post-form.component.html',
  styleUrls: ['./post-form.component.scss']
})
export class PostFormComponent implements OnInit {
  sendingRequest = false
  postForm: FormGroup

  constructor() { }

  ngOnInit() {
    this.postForm = new FormGroup({
      post: new FormControl('', Validators.required)
    })
  }
}
