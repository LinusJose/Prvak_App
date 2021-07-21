import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ServicesService } from '../services/services.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
   
  user=localStorage.getItem("name");

  
 
  constructor(private fb:FormBuilder, private service:ServicesService,private router:Router) { 
   
  }

  ngOnInit(): void {
  }
  

}
