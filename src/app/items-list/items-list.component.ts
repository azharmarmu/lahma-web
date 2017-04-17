import { Component, OnInit } from '@angular/core';
import { FirebaseService} from '../services/firebase.service';

@Component({
  selector: 'app-items-list',
  templateUrl: './items-list.component.html',
  styleUrls: ['./items-list.component.css']
})
export class ItemsListComponent implements OnInit{
    items:any;
    filteredItems:any;
    pages : number = 4;
    pageSize : number = 5;
    pageNumber : number = 0;
    currentIndex : number = 1;
    pagesIndex : Array<number>;
    pageStart : number = 1;
    inputName : string = '';

    constructor(private firebaseService:FirebaseService) {
    }

    init(){
      this.currentIndex = 1;
      this.pageStart = 1;
      this.pages = 4;

      this.pageNumber = parseInt(""+ (this.filteredItems.length / this.pageSize));
      if(this.filteredItems.length % this.pageSize != 0){
          this.pageNumber ++;
      }
  
      if(this.pageNumber  < this.pages){
            this.pages =  this.pageNumber;
      }
      this.refreshItems();
      console.log("this.pageNumber :  "+this.pageNumber);
    }

    ngOnInit(){
      this.firebaseService.getItems().subscribe(items=>{
        console.log(items);//remove in production
        this.items=items;
        this.filteredItems = items;

        this.init();
      })
    }

    FilterByName(){
      this.filteredItems = [];

      if(this.inputName != ""){
            this.items.forEach(element => {
                if(element.name.toLowerCase().includes(this.inputName.toLowerCase())){
                  this.filteredItems.push(element);
               }
            });
      }else{
         this.filteredItems = this.items;
      }
      console.log(this.filteredItems);
      this.init();
    }

    fillArray(): any{
      var obj = new Array();
      for(var index = this.pageStart; index< this.pageStart + this.pages; index ++) {
        obj.push(index);
      }
      return obj;
    }

    refreshItems(){
      this.pagesIndex =  this.fillArray();
    }

    prevPage(){
        if(this.currentIndex>1){
          this.currentIndex --;
        } 
        if(this.currentIndex < this.pageStart){
          this.pageStart = this.currentIndex;
        }
        this.refreshItems();
    }

    nextPage(){
        if(this.currentIndex < this.pageNumber){
              this.currentIndex ++;
        }

        if(this.currentIndex >= (this.pageStart + this.pages)){
          this.pageStart = this.currentIndex - this.pages + 1;
        }
        this.refreshItems();
    }

    setPage(index : number){
          this.currentIndex = index;
          this.refreshItems();
    }

}