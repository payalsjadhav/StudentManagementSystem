import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  regBtn(){
    this.router.navigate(['/register']);
  }
  logBtn(){
    this.router.navigate(['/login']);
  }
  showBtn(){
    this.router.navigate(['/showuser']);
  }
  constructor(private router:Router) {

   }

  ngOnInit(): void {
  }

}
