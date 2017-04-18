import { Component, OnInit } from '@angular/core';
import { FirebaseService} from '../../shared/services/firebase.service';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.css']
})
export class UsersListComponent implements OnInit {
    users:any;
    filteredUsers:any;
    pages : number = 4;
    pageSize : number = 5;
    pageNumber : number = 0;
    currentIndex : number = 1;
    pagesIndex : Array<number>;
    pageStart : number = 1;
    inputName : string = '';

    constructor(private firebaseService:FirebaseService) { }

    init(){
      this.currentIndex = 1;
      this.pageStart = 1;
      this.pages = 4;
      this.pageSize = 4;

      this.pageNumber = parseInt(""+ (this.filteredUsers.length / this.pageSize));
      if(this.filteredUsers.length % this.pageSize != 0){
          this.pageNumber ++;
      }
  
      if(this.pageNumber  < this.pages){
            this.pages =  this.pageNumber;
      }
      this.refreshUsers();
      console.log("this.pageNumber :  "+this.pageNumber);
    }

    ngOnInit() {
      this.firebaseService.getUsers().subscribe(users=>{
        console.log(users);//remove in production
        this.users=users;
        this.filteredUsers = users;

        this.init();
      })
    }

    FilterByName(){
      this.filteredUsers = [];

      if(this.inputName != ""){
            this.users.forEach(element => {
                if(element.name.toLowerCase().includes(this.inputName.toLowerCase())){
                  this.filteredUsers.push(element);
                }else if(element.phoneNumber.toString().includes(this.inputName.toLowerCase())){
                  this.filteredUsers.push(element);
                }else if(element.email.toLowerCase().includes(this.inputName.toLowerCase())){
                  this.filteredUsers.push(element);
                }
            });
      }else{
         this.filteredUsers = this.users;
      }
      console.log(this.filteredUsers);
      this.init();
    }

    fillArray(): any{
      var obj = new Array();
      for(var index = this.pageStart; index< this.pageStart + this.pages; index ++) {
        obj.push(index);
      }
      return obj;
    }

    refreshUsers(){
      this.pagesIndex =  this.fillArray();
    }

    prevPage(){
        if(this.currentIndex>1){
          this.currentIndex --;
        } 
        if(this.currentIndex < this.pageStart){
          this.pageStart = this.currentIndex;
        }
        this.refreshUsers();
    }

    nextPage(){
        if(this.currentIndex < this.pageNumber){
              this.currentIndex ++;
        }

        if(this.currentIndex >= (this.pageStart + this.pages)){
          this.pageStart = this.currentIndex - this.pages + 1;
        }
        this.refreshUsers();
    }

    setPage(index : number){
          this.currentIndex = index;
          this.refreshUsers();
    }

}
