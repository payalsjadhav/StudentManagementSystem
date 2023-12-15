import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-showuser',
  templateUrl: './showuser.component.html',
  styleUrls: ['./showuser.component.css']
})
export class ShowuserComponent implements OnInit {

  user_records:any[]=[];
  data={
    name:"",
    email:"",
    mobile:"",
    address:"",
    password:""
  }
  constructor() { 
    this.user_records=JSON.parse(localStorage.getItem('users')||'{}');
  }

  ngOnInit(): void {
  }

}

