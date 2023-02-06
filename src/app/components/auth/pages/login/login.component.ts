import { Component, OnInit } from '@angular/core';
import { UntypedFormGroup, Validators, UntypedFormBuilder } from '@angular/forms';
import { Router } from '@angular/router';

// JSON
import usersList from 'src/assets/json/users.json';
import { AuthService } from '../../auth.service';
import { AuthUser } from '../../interfaces/auth.interfaces';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm: UntypedFormGroup;
  dataLoading: boolean = false;
  unregistered: boolean = false;
  invalid: boolean = false;
  users:Array<AuthUser> = []

  constructor(
    private fb: UntypedFormBuilder,
    private router: Router,
    private authService : AuthService
  ) { }

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      email: [ '', [Validators.email,Validators.required]],
      password: [ '', [Validators.required, Validators.minLength(6)]]
    })
  }
  loginUser() {
    this.authService.login(this.loginForm.value)
    .then(()=>{
      this.router.navigate(['/principal/ships'])
    }).catch(error => console.log(error))
    
  }
}

