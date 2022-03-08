import { Component, ViewContainerRef, ComponentFactoryResolver,OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { FirebaseCrudService } from './services/firebase/firebase-crud.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Angular-Practice-Home';

  constructor(private fcs:FirebaseCrudService){}
  ngOnInit() {}

  userProfile = new FormGroup({
    name : new FormControl('',[Validators.required]),
    email: new FormControl('',[Validators.required]),
    phone:new FormControl('',[Validators.required]),
    adress:new FormControl('',[Validators.required]),
    gender:new FormControl('',[Validators.required])
  })

  createUserInFirebase(){
    try{
    this.fcs.createUser(this.userProfile.value)
    console.log("User Inserted in the database sucessfully")
    }
    catch (e){
      console.log(e)
    }
  }

  getUsersInFirebase(){

  }

  deleteUserInFirebase(){

  }

  updateUserInFirebase(){

  }


     
}



