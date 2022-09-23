// import { HttpClient } from '@angular/common/http';
// import { Component, OnInit } from '@angular/core';
// import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
// import { Router } from '@angular/router';
// import { environment } from 'src/environments/environment';
// import Swal from 'sweetalert2';


// @Component({
//   selector: 'app-register',
//   templateUrl: './register.component.html',
//   styleUrls: ['./register.component.css']
// })
// export class RegisterComponent implements OnInit {

//   userurl = environment.userapi;
//   registerForm = new FormGroup({
//     username: new FormControl(''),
//     useremail: new FormControl(''),
//     password: new FormControl(''),
//     mobile: new FormControl('')
//   })
//   submitted = false;
//   get f() { return this.registerForm.controls; }
//   constructor(private formBuilder: FormBuilder, private http: HttpClient, private router: Router) { }

//   // submit()
//   // {
//   //   this.router.navigateByUrl('login');

//   // }

//   ngOnInit(): void {
//     this.registerForm = this.formBuilder.group({
//       username: ['', Validators.required, Validators.pattern('[A-Za-z]*'), Validators.minLength(6), Validators.maxLength(16)],
//       useremail: ['', Validators.required,Validators.email],
//       password: ['', Validators.required, Validators.pattern('[A-Za-z0-9]*'), Validators.minLength(6), Validators.maxLength(14)],
//       mobile: ['', Validators.required, Validators.pattern('[0-9]*')]
//     });
//   }


//   submitHandler() {
//     this.submitted = true;
//     if (this.registerForm.invalid) {
//       return;
//     }

//     this.http.post<any>(this.userurl, this.registerForm.value)
//       .subscribe(res => {
//         alert("signUp Successful");
//         this.registerForm.reset();
//         this.router.navigate(['login']);
//       })

//   }
//   // this.http.post<any>(this.userurl, this.registerForm.value)
//   //     .subscribe(res => {
//   //       const Toast = Swal.mixin({
//   //         toast: true,
//   //         position: 'top',
//   //         showConfirmButton: false,
//   //         timer: 3000,
//   //         timerProgressBar: true,
//   //       })

//   //       Toast.fire({
//   //         icon: 'success',
//   //         title: 'Sign Up Successful'
//   //       })
//   //       this.registerForm.reset();
//   //       this.router.navigate(['login']);
//   //     })

//   // }
// }

import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-registration',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

    userurl = environment.userapi;
    registerForm = new FormGroup({
    username: new FormControl(''),
    useremail: new FormControl(''),
    password: new FormControl(''),
    mobile: new FormControl('')
  })

  submitted = false;
  constructor(private formBuilder: FormBuilder, private http: HttpClient, private router: Router) { }

  ngOnInit(): void {
    this.registerForm = this.formBuilder.group({
      username: ['', Validators.required, Validators.pattern('[A-Za-z]*'), Validators.minLength(5), Validators.maxLength(16)],
      useremail: ['', Validators.required],
      mobile: [' ', Validators.required, Validators.pattern('[0-9]*')],
      password: [' ', Validators.required, Validators.pattern('[A-Za-z0-9]*'), Validators.minLength(6), Validators.maxLength(14)],

    });
  }
  get f() { return this.registerForm.controls; }

  submitHandler() {
    this.submitted = true;
    if (this.registerForm.invalid) {
      return;
    }

    this.http.post<any>(this.userurl, this.registerForm.value)
      .subscribe(res => {
        const Toast = Swal.mixin({
          toast: true,
          position: 'top',
          showConfirmButton: false,
          timer: 2000,
          timerProgressBar: true,
        })

        Toast.fire({
          icon: 'success',
          title: 'Sign Up Successful'
        })
        this.registerForm.reset();
        this.router.navigate(['login']);
      })

  }


}
