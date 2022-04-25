import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserdataService {

  constructor() { }

  get(value){
    console.log('I am In Service',value)
  }
}
