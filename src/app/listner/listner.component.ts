import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-listner',
  templateUrl: './listner.component.html',
  styleUrls: ['./listner.component.css']
})
export class ListnerComponent implements OnInit {

  constructor() { }
@ Input()item="Loading...";
  ngOnInit(): void {
  } 
  displayval:any=' ';
  userevent(val:any)
  {
    console.warn((val.target as HTMLInputElement).value);
    this.displayval=(val.target as HTMLInputElement).value;
   // console.warn((val.target as HTMLInputElement).value);
   // this._userDataService.get(this.loginForm.value)
  }
 // userevent2(val:any)
 /// {
   // console.warn(val);
 // }
 virat=[{ name:'sachin',email:'sachin@gmail.com'},
        { name:'rahul',email:'rahul@gmail.com'},
        { name:'shiv',email:'shiv@gmail.com'},
        { name:'munnaa_mote_hai_munna_he_pani_dalenge',email:'munnamotehaimunnahpanidalenge@gmail.com'},
 ];
}
