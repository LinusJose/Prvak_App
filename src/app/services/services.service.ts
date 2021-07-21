import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class ServicesService {

  options={
    withCredentials: true
  }
  
// currentUser="";



  UserDetails:any = {
    "userone@mail.com": {  email:"userone@mail.com" ,username: "userone", password: "userone"},
    "usertwo@mail.com" :{   email:"userone@mail.com", username: "usertwo", password: "usertwo"}
  
  };
  constructor(private http:HttpClient) { }

  login(username: any,password: any){
    const data={
      username,
      password



      }
  
     return this.http.post("http://localhost:8080/login/",data,this.options);
  
 }

 register(email: any,username: any,password: any,empid:any,name:any,number:any,designation:any,address:any){





  const data={
    email,
    username,
    password,
    empid,
    name,
    number,
    designation,
    address

    }

   return this.http.post("http://localhost:8080/register/",data);


 }





}


