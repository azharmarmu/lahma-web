import { Component, OnInit, ViewContainerRef, ViewEncapsulation  } from '@angular/core';
import { FirebaseService} from '../../shared/services/firebase.service';
import { Modal } from 'angular2-modal/plugins/bootstrap';

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

    constructor(private firebaseService:FirebaseService,vcRef: ViewContainerRef, public modal: Modal) {  
      modal.overlay.defaultViewContainer = vcRef;
    }

    init(){
      this.currentIndex = 1;
      this.pageStart = 1;
      this.pages = 4;
      this.pageSize = 4;

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
                }else if(element.rate.toString().includes(this.inputName.toLowerCase())){
                  this.filteredItems.push(element);
                }else if(element.type.toLowerCase().includes(this.inputName.toLowerCase())){
                  this.filteredItems.push(element);
                }else if(element.available_kg.toString().includes(this.inputName.toLowerCase())){
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

    //open dialog to edit
    openEditDialog(item) {
      this.modal.alert()
        .size('lg')
        .showClose(false)
        .body(`
            <h4>Alert is a classic (title/body/footer) 1 button modal window that 
            does not block.</h4>
            <b>Configuration:</b>
            
            <div class="container">
              <h2>Form control: input</h2>
              <p>The form below contains two input elements; one of type text and one of type password:</p>
              <form>
                <div class="form-group">
                  <label for="usr">Name:</label>
                  <input type="text" class="form-control" id="usr">
                </div>
                <div class="form-group">
                  <label for="pwd">Password:</label>
                  <input type="password" class="form-control" id="pwd">
                </div>
              </form>
            </div>
            `)
        .open();
    }
}