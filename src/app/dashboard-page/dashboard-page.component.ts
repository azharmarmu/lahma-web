import { Component, OnInit } from '@angular/core';
import { AngularFire, FirebaseListObservable } from 'angularfire2';
import { database, auth } from 'firebase';


@Component({
  selector: 'app-dashboard-page',
  templateUrl: './dashboard-page.component.html',
  styleUrls: ['./dashboard-page.component.css']
})
export class DashboardPageComponent implements OnInit {

  private items$: FirebaseListObservable<any[]>;

  constructor(public af: AngularFire) {}

  ngOnInit() {
  }

}
