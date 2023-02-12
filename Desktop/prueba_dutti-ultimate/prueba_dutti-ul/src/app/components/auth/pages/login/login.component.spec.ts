import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';


import { LoginComponent } from './login.component';

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;
  let router: Router;
  
  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ LoginComponent ],
      imports:[         
        FormsModule, 
        RouterTestingModule.withRoutes([]),
        ReactiveFormsModule],
        

    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginComponent);
   
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('Debe retornar formulario invalido', () => {
    const fixture = TestBed.createComponent(LoginComponent);
    const app = fixture.componentInstance
    fixture.detectChanges() 

    const email = app.loginForm.controls['email']
    email.setValue('pepe@gmail.com')

    expect(app.loginForm.invalid).toBeTrue(); 
  });
  it('Debe retornar formulario valido', () => {
    const fixture = TestBed.createComponent(LoginComponent);
    const app = fixture.componentInstance
    fixture.detectChanges()

    let email = app.loginForm.controls['email']
    let password = app.loginForm.controls['password']
    

    email.setValue('pepe@gmail.com')
    password.setValue('123456')
    


    expect(app.loginForm.invalid).toBeFalse(); 
  });
});
