import { Component, OnInit } from '@angular/core';
import { AngularFire } from 'angularfire2';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  constructor(public af:AngularFire, private router:Router) { }

  ngOnInit() {
  }

  logout(){
    this.af.auth.logout();
    this.router.navigate(['/login']);
  }

}
