import { Component, OnInit } from '@angular/core';
import { AngularFire, AuthProviders, AuthMethods } from 'angularfire2';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {
errCond:any;
  constructor(public af: AngularFire, private router:Router) {
    // this.af.auth.subscribe(auth =>{
    //   console.log(auth);
    //   if(auth){
    //     this.router.navigateByUrl('/dashboard');
    //   }
    // });
   }

   onSubmit(formData){
     if(formData.valid){
       console.log(formData.value);//remove in production
       this.af.auth.login({
         email: formData.value.email,
         password:formData.value.password
       },
       {
         provider: AuthProviders.Password,
         method: AuthMethods.Password,
       }).then(
         (success)=>{
           console.log(success);//remove in production
           this.router.navigate(['/dashboard']);
       }).catch(
         (err)=>{
           console.log(err);//remove in production
           this.errCond=err;
         }
       )
     }
   }

  ngOnInit() {
  }

}
