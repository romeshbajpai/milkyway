import { Component } from '@angular/core';
import {FormControl,FormGroup,FormControlName,Validators } from '@angular/forms';
import {UserdataService} from './services/userdata.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'milkiway';
  loginForm: FormGroup;
  hide=true;
  constructor(private _userDataService:UserdataService){

    this.loginForm=new FormGroup({
      firstname:new FormControl(' ',[Validators.required,Validators.pattern('^[a-zA-Z]+$')]),
      lastname:new FormControl(' ',[Validators.required,Validators.pattern('^[a-zA-Z]+$')]),
      email:new FormControl(' ',[Validators.required,Validators.email]),
      password:new FormControl(' ',[Validators.required,Validators.minLength(7)])
    })
  }
  
 
  userlogin()
  {
    //console.log(this.loginForm.value);
    this._userDataService.get(this.loginForm.value)
  }
 get firstname()
 {
   return this.loginForm.get('firstname');
 }
 get lastname()
 {
   return this.loginForm.get('lastname');
 }
 get email()
 {
   return this.loginForm.get('email');
 }
 get password()
 {
   return this.loginForm.get('password');
 }
 mydata="my form" ;
show=80;
color="skyblue";
peechekacolor="black";
updateColor(){
  this.color="yellow"
  this.peechekacolor="pink"
}
list:any[]=[];
addTask(item:any)
{
  this.list.push({id:this.list.length,name:item});
  console.warn(this.list)
}
removetask(id:any)
{
  console.warn(id)
  this.list=this.list.filter(item=>item.id!==id)
}  


}
