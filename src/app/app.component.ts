import { Component, OnInit } from '@angular/core';
import { UserService } from './user.service';
import { User } from './user.class';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  users:User[];

  ngOnInit(){
    //call on service
    this.usersvc.list().subscribe(
      res => {
        //works want to see data in console testing all connections are working
        //should be a list of users in console
        this.users = res;//saved data to use in app.component.html
        console.log("Users:", res);
      },
      err => {
        console.error("User service list failed:", err);
      }
    );

  }

  constructor(
    private usersvc:UserService
  ){}


  title = 'Angular 9';
  name:string = "No name yet!";
  h1Color: string = "red";
  isHidden: boolean=false;
  txtValue: string = 'Inital value';
  showDiv:boolean =true;
  names: string[]=[
    "Anna","Bill","Chris","Dean","Erin"
  ];

  //method
  setTxtValue(val:string):void{
    this.txtValue=val;
  }
  setName(): void{
    this.name="Traci";
  }
  toggleColor(): void{
    this.h1Color=(this.h1Color == "red") ? "blue ": "red";
  }
  flipHidden(): void{
    this.isHidden=!this.isHidden;
  }
}
