import { Component, OnInit } from '@angular/core';
import { FirebaseService} from '../services/firebase.service';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.css']
})
export class UsersListComponent implements OnInit {
  users:any;

  constructor(private firebaseService:FirebaseService) { }

  ngOnInit() {
    this.firebaseService.getUsers().subscribe(users=>{
      console.log(users);//remove in production
      this.users=users;
    })
  }

}
