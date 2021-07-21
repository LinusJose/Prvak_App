import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ServicesService } from '../services/services.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  registerForm=this.fb.group({
    username:['',[Validators.required,Validators.pattern('[a-zA-Z ]*')]] ,
    password:['',[Validators.required,Validators.pattern('[a-zA-Z0-9]*')]],
    email:['',[Validators.required,Validators.email]],
    empid:['',[Validators.required,Validators.pattern('[a-zA-Z0-9]*')]] ,
    name:['',[Validators.required,Validators.pattern('[a-zA-Z ]*')]] ,
    number:['',[Validators.required,Validators.pattern('[a-zA-Z0-9]*')]],

    designation:['',[Validators.required,Validators.pattern('[a-zA-Z]*')]] ,
    address:['',[Validators.required,Validators.pattern('[a-zA-Z]*')]] ,


  })
  constructor( private fb:FormBuilder, private service:ServicesService,private router:Router) { }

  ngOnInit(): void {
  }
  register(){
    if(this.registerForm.valid){
      var username=this.registerForm.value.username;
      var email=this.registerForm.value.email;
      var password=this.registerForm.value.password;
      var empid=this.registerForm.value.empid;
      var name=this.registerForm.value.name;
      var number=this.registerForm.value.number;
      var designation=this.registerForm.value.designation;
      var address=this.registerForm.value.address;
     this.service.register(email,username,password,empid,name,number,designation,address)
     .subscribe((result:any)=>{
       if(result){
         alert(result.message);
         this.router.navigateByUrl('');
       }
     },
     (result)=>{
       alert(result.error.message);
     }
     )
      
    }
   else{
     alert("Invalid form")
   }
  }
}
