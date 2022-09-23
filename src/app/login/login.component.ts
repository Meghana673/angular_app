import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';
import { UserService } from '../user.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  // form: FormGroup = new FormGroup({});
  // isSubmitted: boolean = false;
  //   isValidUser: boolean = false;
  //   userapi=environment.userapi;
  //   public loginForm!:FormGroup
  //   submitted = false;

  //   get f() { return this.loginForm.controls; }



  // constructor(private formBuilder:FormBuilder,private router: Router,private http:HttpClient, private userService: UserService)
  // { }

  // ngOnInit(): void {
    // this.form = this.fb.group({
    //   email: new FormControl('', [Validators.required, Validators.email]),
    //   password: new FormControl('', [Validators.required]),
    // });
  //   this.userService.validateAuth(false); //data parameter in your userservice
  //     this.loginForm = this.formBuilder.group({
  //       useremail: ['', [Validators.required, Validators.email,Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')]],
  //       password: ['', [Validators.required, Validators.minLength(6)]]
  //         });
  // }
  // onSubmit() {
  //       this.authService
  //         .login(this.form.value.email, this.form.value.password)
  //         .subscribe((data) => {
  //           if (data) {
  //             this.router.navigate(['/deals']);  // If valid and route to card
  //           }
  //           this.isSubmitted = true;
  //           this.isValidUser = data; // false show error message
  //         });
  //     }


  public loginForm!:FormGroup

  userapi=environment.userapi;

  submitted = false;
  get f() { return this.loginForm.controls; }

  constructor(private formBuilder:FormBuilder,private http:HttpClient,private router:Router,private userService: UserService) { }

    ngOnInit(): void {
      this.userService.validateAuth(false); //data parameter in your userservice
      this.loginForm = this.formBuilder.group({
        useremail: ['', [Validators.required, Validators.email,Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')]],
        password: ['', [Validators.required, Validators.minLength(6)]]
          });
    }
    login(){
      this.submitted = true;
      if (this.loginForm.invalid) {
        return ;
      }

      this.http.get<any>(this.userapi)
      .subscribe(res=>{
        const user=res.find((a:any)=>{
          return a.useremail === this.loginForm.value.useremail && a.password=== this.loginForm.value.password
        });
      //   if(user){
      //     alert("login successful!!");
      //     this.loginForm.reset();
      //     this.router.navigate([' '])
      //     this.userService.validateAuth(true);
      //   }else{
      //     alert("user not found !!");
      //     this.userService.validateAuth(false);
      //   }
      // })
      // }

      if(user){
        const Toast = Swal.mixin({
          toast: true,
          position: 'top',
          showConfirmButton: false,
          timer: 1000,
          timerProgressBar: true,
        })

        Toast.fire({
          icon: 'success',
          title: 'Login Successful'
        })
        this.loginForm.reset();
        this.router.navigate([''])
        this.userService.validateAuth(true);
      }else{
        const Toast = Swal.mixin({
          toast: true,
          position: 'top',
          showConfirmButton: false,
          timer: 3000,
          timerProgressBar: true,
        })

        Toast.fire({
          icon: 'error',
          title: 'User not found'
        })
        this.userService.validateAuth(false);
      }
    })
  }
    }

