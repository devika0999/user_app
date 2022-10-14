import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor() { }

  name=""
  mobile=""
  gender=""
  email=""
  address=""
  pincode=""
  blood=""
  dob=""
  age=""
  parent=""
  password=""
  confirm=""


  readValues=()=>{

    let data={
        "name":this.name,
        "mobile":this.mobile,
        "gender":this.gender,
        "email":this.email,
        "address":this.address,
        "pincode":this.pincode,
        "blood":this.blood,
        "dob":this.dob,
        "age":this.age,
        "parent":this.parent,
        "password":this.password,
        "confirm":this.confirm

    }

    console.log(data)

  }

  ngOnInit(): void {
  }

}
