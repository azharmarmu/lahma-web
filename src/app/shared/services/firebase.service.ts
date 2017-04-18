import { Injectable } from '@angular/core';
import { AngularFire, FirebaseListObservable } from 'angularfire2';

@Injectable()
export class FirebaseService {
  users: FirebaseListObservable<any[]>;
  items: FirebaseListObservable<any[]>;

  constructor(private af: AngularFire) { }

  getUsers(){
    this.users = this.af.database.list('usersInfo') as FirebaseListObservable<Users[]>
    return this.users;
  }

  getItems(){
    this.items = this.af.database.list('items') as FirebaseListObservable<Items[]>
    return this.items;
  }

}

interface Users{
  name?:string;
  phoneNumber?:string;
  email?:string;
  cart?:string;
  cart_amount?:any;
}

interface Items{
  available_kg?:any;
  description?:string;
  min_kg?:any;
  name?:string;
  rate?:any;
  type?:string;
}
