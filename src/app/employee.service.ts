import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor() { }

getEmployees(){
  return [{id:1,name:"venkat",age:30},
{id:2,name:"ravi",age:35},
{id:3,name:"rohit",age:40}]
}


}



