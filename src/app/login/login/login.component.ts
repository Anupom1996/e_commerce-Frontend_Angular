import { Component, OnInit } from '@angular/core';
 import { Router, ActivatedRoute } from '@angular/router';
 import { AbstractControl, FormGroup, FormControl, Validators } from '@angular/forms';
 import { ServiceService } from '../../service/service.service';
import { invalid } from '@angular/compiler/src/render3/view/util';
//import { FormGroup, FormControl, Validators } from '@angular/forms';
// import { HttpClient, HttpHeaders } from '@angular/common/http';
//import { AuthServiceService } from './../../auth-service.service' ; //file ta loi?
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [ ],

})
export class LoginComponent implements OnInit {
//fromGroup:FormGroup;

loginForm: FormGroup;
  constructor(private _myservice:ServiceService ,
    private _router: Router,private _activatedRoute: ActivatedRoute) {
      this.loginForm = new FormGroup({
        email: new FormControl(null, Validators.required),
        password: new FormControl(null, Validators.required)
      });
  
     }
  ngOnInit() {
    //this.initFrom();
  }
  isValid(ControlName) {
  
    return this.loginForm.get(ControlName).invalid && this.loginForm.get(ControlName).touched;
  }

  login() {
    console.log(this.loginForm.value);

    if (this.loginForm.valid) {
      console.log(this.loginForm.value);
      this._myservice.login(this.loginForm.value)
        .subscribe(
          data => {
            console.log(data);
            localStorage.setItem('token', data.toString());
            this._router.navigate(['/wrapper']);
          },
          error => { }
        );
    }
  }
  // initFrom(){
  //   this.fromGroup = new FormGroup({
  //     email: new FormControl('',[Validators.required]),
  //     password: new FormControl('',[Validators.required])
  //   });
  // }
  // loginProcess(){
  //   console.log(this.fromGroup);
  //   console.log(this.fromGroup.valid);
  //   console.log(this.fromGroup.value);
  //   if(this.fromGroup.valid){
  //     this.authService.login(this.fromGroup.value).subscribe(result=>{
  //       if(result.success){
  //         console.log(result)
  //         alert(result.message)
  //       }else{
  //         alert(result.message)
  //       }
  //     });
  //     this.redirectedTo();
  //   } else {
  //     alert("Invalid Form!");
  //   }
    
  // }
  // redirectedTo(){
  //   this._router.navigateByUrl('/home');
  //    }
 
}


