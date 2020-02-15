import { Component, OnInit } from '@angular/core';
import{Router} from '@angular/router';
import { EmployeeService } from '../employee.service';
@Component({
  selector: 'app-departmentlist',
  templateUrl: './departmentlist.component.html',
  styleUrls: ['./departmentlist.component.css']
})
export class DepartmentlistComponent implements OnInit {
  public employees1=[];
  dataFilter={name:''};
 
  public employees=[{id:1,name:"angular",age:30},
{id:2,name:"mangodb",age:35},
{id:3,name:"css",age:35}]

  constructor(private router:Router,private _employeeService:EmployeeService) { }

  ngOnInit() {
    this.employees1=this._employeeService.getEmployees();
  }
 onSelect(employee){
   return this.router.navigate(["/departments",employee.id]);

 }
}

