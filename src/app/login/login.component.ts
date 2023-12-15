import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user_records:any[]=[];
  data={
    email:"",
    password:""
  }
  doLogin(values:any){
    this.user_records=JSON.parse(localStorage.getItem("users")||'{}');
    if(this.user_records.some((v)=>{
      return v.email==this.data.email && v.password==this.data.password
    })){
      alert("Login Successful");
      this.router.navigate(['/showuser']);
    }
    else{
      alert("Login Failed");
    }
  }
  constructor(private router:Router) { }

  ngOnInit(): void {
  }

}
