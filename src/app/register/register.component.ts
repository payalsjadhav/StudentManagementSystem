import { Component, OnInit } from '@angular/core';
import { FormControl,FormGroup } from '@angular/forms';
import { getMatFormFieldDuplicatedHintError } from '@angular/material/form-field';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  user_records:any[]=[];
  data={
    name:"",
    email:"",
    mobile:"",
    address:"",
    password:""
  }
  doRegistration(Values:any){
    //this.user_records=JSON.parse(localStorage.getItem('user')||'{}');
    if(this.user_records.some((v)=>{
      return v.email==this.data.email
    })){
      alert("Duplicate data");
    }
    else{
      this.user_records.push(this.data)
      localStorage.setItem("users",JSON.stringify(this.user_records));
      alert("Hi"+this.data.name+ "you are successfully registered");
    }
  }
  constructor() { }

  ngOnInit(): void {

  }

}
