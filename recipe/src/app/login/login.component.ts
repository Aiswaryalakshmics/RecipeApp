import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  email: string = '';
  password: string = '';

  constructor(private http:HttpClient, private router: Router) {}
  onSubmit(form:any){
  const { email,password} = form.value;
  // make the POST request
  this.http.post('http://localhost:3000/login',{email,password}).subscribe(
   (response: any)=>{
    if(response.success){
     
      console.log('Login Successful');
       
      this.router.navigate(['/users']); 
    }else{
      console.log(response.message);
    }
  },
  (error)=>{
    console.error('login Failed',error);
    }
  );
}
  
}


