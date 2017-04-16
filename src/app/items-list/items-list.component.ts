import { Component, OnInit } from '@angular/core';
import { FirebaseService} from '../services/firebase.service';

@Component({
  selector: 'app-items-list',
  templateUrl: './items-list.component.html',
  styleUrls: ['./items-list.component.css']
})
export class ItemsListComponent implements OnInit {
  items:any;

  constructor(private firebaseService:FirebaseService) { }

  ngOnInit() {
    this.firebaseService.getItems().subscribe(items=>{
      console.log(items);//remove in production
      this.items=items;
    })
  }

}
