import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-employeelist',
  templateUrl: './employeelist.component.html',
  styleUrls: ['./employeelist.component.css']
})
export class EmployeelistComponent implements OnInit {
 public x=10;
  constructor() { }
  ngOnInit() {
   setTimeout(()=>{
    console.log(this.x);
   },10000)
  }
  confirm1(){
    return confirm("do you want to navigate")
  }



}
