import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-up',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignUpComponent  {
  name : string='';
  email: string = '';
  password: string = '';
  constructor(private http: HttpClient,private router: Router) { }
  onSubmit(form: any) {
    const { name,email,password} = form.value;
    this.http.post('http://localhost:3000/signup',
      { name,email,password }) .subscribe((response:any)=>{
        console.log(response);
        this.router.navigate(['/users'])
      },

  (error)=>{
    console.error(error); 
  }
);
}

}
    
