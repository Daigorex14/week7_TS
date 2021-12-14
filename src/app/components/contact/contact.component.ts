import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Contact } from './contact';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  contact : Contact;
  strResult: string;
  // name : string = "Thanakit S.";
  // email : string = "Daigore14@gmail.com";
  // tel : string = "092 470 8008"
  // msg : string = "This is my message."

  constructor() { }

  ngOnInit(): void {
    this.contact = new Contact();
  }

  readData(){
    console.log(this.contact.name);
    console.log(this.contact.email);
    console.log(this.contact.tel);
    console.log(this.contact.msg);
  }

  onSubmit(f:NgForm){
    this.strResult = JSON.stringify(this.contact);
    window.alert(JSON.stringify(this.contact));
  }

}
